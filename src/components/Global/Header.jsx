import logo from '../../assets/Netflix_Logo_PMS.png'
import icon from '../../assets/user_icon.png'
import { auth } from '../../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { addUser, removeUser } from '../../utils/userSlice';
import { toggleGptSearchView } from '../../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../../utils/constants';
import { changeLanguage } from '../../utils/configSlice';


export default function Header() {
  const user = useSelector(store => store.user);
  // console.log(user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSignOut = () => {  
    signOut(auth).then(() => {
      // navigate to home
      navigate('/');
    }).catch(error => {
      navigate('/error');
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate('/browse');
      } else {
        dispatch(removeUser())
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGPTSearch = () => {
    // toggle
    dispatch(toggleGptSearchView());
  }

  // languages supported in our app
  const languages = 
    SUPPORTED_LANGUAGES.map(lang =>
      <option key={lang.identifier} value={lang.identifier}>
        {lang.name}
      </option>  
    )

  // handle the language change
  const handleLanguageChange = e => {
    // console.log('toggle in header component:', e.target.value);
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <nav className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between p-2'>
      <img
        className='w-44'
        src={logo}
        alt="Logo"
      />
      {user && (
        <div className='flex items-center gap-x-2'>
          {/* multiple language options */}
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className='bg-gray-700 text-white outline-none cursor-pointer p-2 rounded-md'
            >
              {languages}
            </select>
          )}
          <button
            onClick={handleGPTSearch}
            className="px-4 py-2 mx-4 bg-blue-700 text-white rounded-md"
          >
            {showGptSearch ? 'Home' : 'GPT Search'}
          </button>
          <img className='w-9 h-9 rounded-md' src={icon} alt="user-icon" />
          <button
            onClick={handleSignOut}
            className='font-semibold text-white px-2 py-1 rounded-md bg-blue-700'
          >
            Sign Out
          </button>
        </div>
      )}
    </nav>
  )
}