import { Outlet } from 'react-router-dom';
const HomeLayout = () => {
  return (
    <>
        <p>This is home Layout</p>
        <Outlet />
      
    </>
  );
};
export default HomeLayout;
