import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const MainLayout = () => {
  return (
    <>
        <div className='flex flex-row bg-bg_ten'>
          <div className='z-50'>
          <Sidebar/>
          </div>
          <Outlet/>
        </div>
    </>
  );
}

export default MainLayout