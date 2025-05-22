import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { 
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
 } from './pages';


  const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
      },
    ],
  },
 ]);

function App() {
  

  return (
    <>
      <RouterProvider router={router} />;
      
      <HomeLayout />
    </>
  )
};

export default App;
