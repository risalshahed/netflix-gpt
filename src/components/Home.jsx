import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Auth/Login'
import Browse from './Browse'

export default function Home() {
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
  // ***** 2.0 Another point to be noted, useEffect a onAuthStateChanged dewa hoice, with NO DEPENDENCY ARRAY, tar mane component er EACH RENDER a 1 bar kore "onAuthStateChanged" function fire hbe
  /* useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // 1.1 if User is signed in, see docs for a list of available properties
      if (user) {
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        // dispatch the 'addUser' action & put the info of the user in the store
        dispatch(addUser({ uid, email, displayName, photoURL }));

        // if user is logged in, always redirect him to 'browse' page
        navigate('/browse');
        // ****** 2.1 BUT "navigate" will work only inside <RouterProvider router={appRouter} /> i.e. sudhu "Login" r "Browse" Component r tader children a kaj krbe 'navigate'; onno kothao like EIKHANE O NAAA *******
        
        // 1.2 if User is signed out
      } else {
        dispatch(removeUser())
        // if user is NOT logged in, always redirect him to 'login' page
        navigate('/');
        // ****** 2.1 BUT "navigate" will work only inside <RouterProvider router={appRouter} /> i.e. sudhu "Login" r "Browse" Component r tader children a kaj krbe 'navigate'; onno kothao like EIKHANE O NAAA *******

        // 2.2 ******* tahole SOLUTION KI??? amdr ekhn taile code refactor kra lagbe, "useEffect" ta emn Component a dewa lagbe jei Component FULL APP a e GLOBALLY asey, abr "RouterProvider" er vitoreo thakte hbe! so, 'Header' is such a Component, eita RouterProvider er mddheo ase (jehetu eta Login r Browse Component er mddhe NESTED Component hishebe ase, abr eita FULL APP a GLOBALLY o asey)
      }
    });
  }, []); */

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}