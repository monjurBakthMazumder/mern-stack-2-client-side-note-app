import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='bg-gray-100 dark:bg-gray-800 dark:text-white min-h-screen'>
            <div className="max-w-3xl mx-auto">
                <Navbar/>
                <div className="bg-gray-50 dark:bg-gray-600 min-h-[90vh] p-5 md:p-10 mt-5">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;