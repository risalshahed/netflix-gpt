import { useState } from 'react'
import background from '../../assets/background.jpg'

export default function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = e => {
    e.preventDefault();
    setIsSignIn(!isSignIn);
  }

  return (
    <div>
      <div>
        <img
          className='absolute'
          src={background}
          alt="background"
        />
      </div>
      {/* ****** In case of position: absolute, mx-auto WON'T WORK UNLESS right: 0 & left: 0 are provided */}
      <form className='absolute left-0 right-0 bg-black w-1/3 mx-auto my-32 p-12 text-white rounded-lg bg-opacity-75'>
        <h1 className='font-bold text-3xl px-10 py-4'>
          Sign {isSignIn ? 'In' : 'Up'}
        </h1>
        {
          isSignIn
          ||
          <div>
            <input type="text" placeholder='Enter your name' className='p-2 my-2 w-3/4 block mx-auto bg-gray-700' />
          </div>
        }
        <div>
          <input type="email" placeholder='Enter your email' className='p-2 my-2 w-3/4 block mx-auto bg-gray-700' />
        </div>
        <div>
          <input type="password" placeholder={isSignIn ? `Enter Password to login ` : `Create New Password`} className='p-2 my-2 w-3/4 block mx-auto bg-gray-700' />
        </div>
        {
          isSignIn
          ||
          <div>
            <input type="password" placeholder='Confirm your password' className='p-2 my-2 w-3/4 block mx-auto bg-gray-700' />
          </div>
        }
        <div>
          <button
            className='bg-red-700 ml-10 my-4 py-3 rounded-lg w-3/4'
          >
            Sign {isSignIn ? 'In' : 'Up'}
          </button>
        </div>
        <p className='py-4 cursor-pointer' onClick={toggleForm}>
          {isSignIn ? 'New to NetFlix? Register Here' : 'Already Have an account? Login Here'}
        </p>
      </form>
    </div>
  )
}