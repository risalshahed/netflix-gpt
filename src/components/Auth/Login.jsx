import { useRef, useState } from 'react'
import background from '../../assets/background.jpg'
import chackValidData from '../../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../utils/firebase';

/* ------------------------------------------------------------
            DEPLOY WEB APP WITH FIREBASE
------------------------------------------------------------ */
/* 
- firebase login
- firebase init
- firebase deploy
*/

/* ------------------------------------------------------------
            FIREBASE AUTHENTICAION
------------------------------------------------------------ */
/* 
- Go to Firebase documentation
- Search 'Firebase Authentication'
- Go to Web -> Manage users
*/

export default function Login() {
  // 1 set initial value if the form is of sign in
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  // 2 Form Validation with useRef (Go to utils/validate.jsx)
  const name = useRef('');
  const email = useRef('');
  const password = useRef('');

  // 2.1 toggle form function
  const toggleForm = e => {
    e.preventDefault();
    setIsSignIn(!isSignIn);
  }

  // 2.2 handle the form submit
  const handleSubmit = e => {
    e.preventDefault();
    // useRef er through te input data OBJECT hishebe paay!
    console.log(email?.current.value, password?.current.value);
    // validate the form data
    // chackValidData(email.current.value, password.current.value);
    const message = chackValidData(email?.current.value, password?.current.value);
    // console.log(message);
    setErrorMessage(message);
    // email password VALID hoile, message = null; tar mane hoilo,
    // 3 if(message === null) -> sign in or sign up hbe, r message truthy hoile, error hbe
    if (message) return; // RETURN from here if message is truthy i.e. error occurs
    // else -> sign in/ sign up logic
    // 3.1 sign up logic
    if(!isSignIn) {
      createUserWithEmailAndPassword(
        // 3.1.1 ei function ta basically USER er input kra auth, email id r password nibe
        auth,
        email.current.value,
        password.current.value,
      )
      .then(userCredential => {
        // Signed up 
        const user = userCredential.user;
        // gonna provide me a user object
        // console.log(user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode}- ${errorMessage}`)
      });
      // 1st account: risalshahed@gmail.com; password: a12345@
      // 2nd account: aa@bb.cc; password: 1234a@
    } else {
      // 3.2 sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
      .then(userCredential => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode}- ${errorMessage}`)
      });
    }

    // clear input field
    isSignIn || (name.current.value = '');
    email.current.value = '';
    password.current.value = '';
  }

  // 4
  // npm i -D @reduxjs-toolkit

  return (
    <div>
      {/* 1.1 background image */}
      <div>
        <img
          className='absolute'
          src={background}
          alt="background"
        />
      </div>
      {/* ****** In case of position: absolute, mx-auto WON'T WORK UNLESS right: 0 & left: 0 are provided */}
      <form
        onSubmit={handleSubmit}
        className='absolute left-0 right-0 bg-black w-1/3 mx-auto my-32 p-12 text-white rounded-lg bg-opacity-75'
      >
        {/* 1.2 Conditional Sign In/Up field */}
        <h1 className='font-bold text-3xl px-10 py-4'>
          Sign {isSignIn ? 'In' : 'Up'}
        </h1>
        {/* 1.2.1 Name field for Sign Up Only */}
        {
          isSignIn
          ||
          <div>
            <input
              ref={name}
              type="text"
              placeholder='Enter your name'
              className='p-2 my-5 w-3/4 block mx-auto bg-gray-700' />
          </div>
        }
        {/* 1.3 Email Field (for both sign in & sign up) */}
        <div>
          <input
            ref={email}
            type="email"
            placeholder='Enter your email'
            className='p-2 my-5 w-3/4 block mx-auto bg-gray-700'
          />
        </div>
        {/* 1.4 Password Field for sign in & sign up */}
        <div>
          <input
            ref={password}
            type="password"
            placeholder={isSignIn ? `Enter Password to login ` : `Create New Password`}
            className='p-2 my-5 w-3/4 block mx-auto bg-gray-700'
          />
        </div>
        {/* 1.5 Submit button (sign up & sign in both) */}
        <div>
          <button className='bg-red-700 ml-10 my-4 py-3 rounded-lg w-3/4'>
            Sign {isSignIn ? 'In' : 'Up'}
          </button>
        </div>

        <p className='text-red-600 py-4 text-center font-bolder text-xl'>
          {errorMessage}
        </p>

        {/* 1.6 Toggle Text to toggle the FORM */}
        <p className='py-4 cursor-pointer text-center' onClick={toggleForm}>
          {isSignIn ? 'New to NetFlix? Register Here' : 'Already Have an account? Login Here'}
        </p>
      </form>

    </div>
  )
}