import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Navbar'

 const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>home</h1>,
  },
  {
    path: '/about',
    element: (
      <div>
        <h2>about page</h2>
      </div>
    ),
  },
 ]);

function App() {
  

  return (
    <>
      <RouterProvider router={router} />;
      <Navbar />
    </>
  )
};

export default App;
