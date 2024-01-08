import logo from '../../assets/Netflix_Logo_PMS.png'
import icon from '../../assets/user_icon.png'
import { auth } from '../../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'


export default function Header() {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  // console.log(user);
  
  const handleSignOut = () => {  
    signOut(auth).then(() => {
      // navigate to home
      navigate('/');
    }).catch(error => {
      navigate('/error');
    });
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
          <img className='w-9 h-9 rounded-md' src={user?.photoURL} alt="user-icon" />
          <button
            onClick={handleSignOut}
            className='font-bold text-white px-2 py-1 rounded-md bg-sky-700'
          >
            Sign Out
          </button>
        </div>
      )}
    </nav>
  )
}