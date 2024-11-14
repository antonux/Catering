import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Inquiry from '../components/Inquiry';

const MainLayout = () => {
  return (
    <>
        <div className='flex flex-row '>
            <Sidebar/>
            <Outlet/>
        </div>
    </>
  );
}

export default MainLayout