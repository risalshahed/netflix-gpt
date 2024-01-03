import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Auth/Login'
import Browse from './Browse'

export default function Home() {
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

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}
