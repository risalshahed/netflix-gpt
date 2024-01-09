import logo from '../../assets/Netflix_Logo_PMS.png'
import icon from '../../assets/user_icon.png'
import { auth } from '../../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { addUser, removeUser } from '../../utils/userSlice';


export default function Header() {
  const user = useSelector(store => store.user);
  // console.log(user);
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

  /* --------------------------------------------------------------------------
  ------------------------ LOGIN/ LOGOUT STATE CHANGE ------------------------
  -------------------------------------------------------------------------- */

  // ***** 1 user login ba logout korle, "onAuthStateChanged" function fire hbe, that is, user login krleo eikhan theke kaj hbe (if (user)), abr logout krleo eikhan thekei kaj hbe (else)
  // onAuthStateChanged -> ei component (jeikhane routing kra hoice) or App.jsx, anywhere ei function lekha jabe
  // ***** 2.0 Another point to be noted, useEffect a onAuthStateChanged dewa hoice, with NO DEPENDENCY ARRAY, tar mane component er EACH RENDER a 1 bar kore "onAuthStateChanged" function fire hbe
  useEffect(() => {
    // 2.4.1 "onAuthStateChanged" function actually 1ta 'unsubscribe' function RETURN kre, ekhn ei function er CALL k return krlei unsubscribe kra hbe i.e.e Component unmount i.e. "Header" Component UNLOAD er smy
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // 1.1 if User is signed in, see docs for a list of available properties
      if (user) {
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        // dispatch the 'addUser' action & put the info of the user in the store
        dispatch(addUser({ uid, email, displayName, photoURL }));

        // if user is logged in, always redirect him to 'browse' page
        navigate('/browse');
        // 2.3, eikhane jodi amra navigate korei feli, tahole ki amdr r "Login" Component theke navigate krar dorkar ase??? NAAA, so let's remove the 'navigate' there
        // ****** 2.1 BUT "navigate" will work only inside <RouterProvider router={appRouter} /> i.e. sudhu "Login" r "Browse" Component r tader children a kaj krbe 'navigate'; onno kothao like EIKHANE O NAAA *******
        
        // 1.2 if User is signed out
      } else {
        dispatch(removeUser())
        // if user is NOT logged in, always redirect him to 'login' page
        navigate('/');
        // 2.3 eikhane jodi amra navigate korei feli, tahole ki amdr r "Login" Component theke navigate krar dorkar ase??? NAAA, so let's remove the 'navigate' there
      }
    });

    // ********** 2.4 unsubscribe when the Component UNMOUNTS (when "Header" Component UNLOADS) **********
    return () => unsubscribe();
  }, []);

  return (
    <nav className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between p-2'>
      <img
        className='w-44'
        src={logo}
        alt="Logo"
      />
      {user && (
        <div className='flex items-center gap-x-2'>
          {/* <img className='w-9 h-9 rounded-md' src={user?.photoURL} alt="user-icon" /> */}
          <img className='w-9 h-9 rounded-md' src={icon} alt="user-icon" />
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