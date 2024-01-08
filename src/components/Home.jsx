import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Auth/Login'
import Browse from './Browse'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

export default function Home() {
  const dispatch = useDispatch();

  // *********** Routing of the App/ Project ***********
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    },
  ])

  /* --------------------------------------------------------------------------
  ------------------------ LOGIN/ LOGOUT STATE CHANGE ------------------------
  -------------------------------------------------------------------------- */

  // ***** 1 user login ba logout korle, "onAuthStateChanged" function fire hbe, that is, user login krleo eikhan theke kaj hbe (if (user)), abr logout krleo eikhan thekei kaj hbe (else)
  // onAuthStateChanged -> ei component (jeikhane routing kra hoice) or App.jsx, anywhere ei function lekha jabe
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // 1.1 if User is signed in, see docs for a list of available properties
      if (user) {
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        // dispatch the 'addUser' action & put the info of the user in the store
        dispatch(addUser({ uid, email, displayName, photoURL }));
        // sign in er pore, browse page a navigate kro
        // navigate('/browse');
        // ****** BUT, navigate ei component a kra jabe naa! cz ei component a routing declare kra hoice, so we can't use navigate here! ("Login" component a krbo)
        
        // 1.2 if User is signed out
      } else {
        dispatch(removeUser())
        // sign out er pore, home page a navigate kro
        // navigate('/');
        // ****** BUT, navigate ei component a kra jabe naa! cz ei component a routing declare kra hoice, so we can't use navigate here! ("Login" component a krbo)
      }
    });
  },[])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}