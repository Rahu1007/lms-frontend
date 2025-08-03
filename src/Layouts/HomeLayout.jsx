import ThemeToggle from '../Components/ThemeToggle';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function HomeLayout({ children }) {
    const [isSidenavOpen, setSidenavOpen] = useState(false);

    const dispatch=useDispatch();
    const navigate=useNavigate();

    //for checking if user is logged inc
    const isLoggedIn=useSelector((state) => state?.auth?.isLoggedIn);

    const role=useSelector((state) => state?.auth?.role);

    function openNav() {
        setSidenavOpen(true);
    }

    function closeNav() {
        setSidenavOpen(false);
    }

    function handleLogout(e) {
        e.preventDefault();

        const res=await dispatch(logout());
        if (res?.payload?.success) {
            navigate('/login');
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
            {/* Sidenav */}
            <div
                id="mySidenav"
                className={`sidenav fixed top-0 left-0 h-full bg-gray-800 bg-opacity-100 text-white transition-all duration-500 ease-in-out overflow-x-hidden z-50 ${
                    isSidenavOpen ? 'w-80' : 'w-0'
                }`}
            >
                <a
                    href="javascript:void(0)"
                    className="closebtn absolute top-0 right-4 text-4xl"
                    onClick={closeNav}
                >
                    &times;
                </a>
                <ul className="menu p-4 mt-16 text-lg">
                    <li onClick={closeNav}>
                        <Link to="/">Home</Link>
                    </li>
                    { isLoggedIn && role === 'ADMIN' && (
                        <li>
                            <Link to="/admin/dashboard">Admin Dashboard</Link>
                        </li>
                    )}
                    <li onClick={closeNav}>
                        <Link to="/courses">All Courses</Link>
                    </li>
                    <li onClick={closeNav}>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li onClick={closeNav}>
                        <Link to="/about">About Us</Link>
                    </li>

                    {!isLoggedIn && (
                <li className="absolute bottom-4 left-0 w-full p-4 rounded-md">
                        <div className="w-full flex items-center justify-center">
                                <button className='btn-primary hover:bg-blue-800 px-4 py-1 font-semibold rounded-md w-full mb-2 '>
                                    <Link to="/login">Login</Link>
                                </button>

                                <button className='btn-secondary hover:bg-green-600  px-4 py-1 font-semibold rounded-md w-full mb-2 '>
                                    <Link to="/Signup">Signup</Link>
                                </button>
                        </div>
                </li>
                    )}

                       {isLoggedIn && (
                <li className="absolute bottom-4 left-0 w-full p-4 rounded-md">
                        <div className="w-full flex items-center justify-center">
                                <button className='btn-primary hover:bg-blue-800 px-4 py-1 font-semibold rounded-md w-full mb-2 '>
                                    <Link to="/user/profile">Profile</Link>
                                </button>

                                <button className='btn-secondary hover:bg-green-600  px-4 py-1 font-semibold rounded-md w-full mb-2 '>
                                    <Link onClick={handleLogout}>LogOut</Link>
                                </button>
                        </div>
                </li>
                    )}





                </ul>
            </div>

            {/* Main Content Area */}
            <div
                id="main"
                className={`flex flex-col min-h-screen transition-all duration-500 ease-in-out ${
                    isSidenavOpen ? 'ml-80' : 'ml-0'
                }`}
            >
                <div className="p-4 flex justify-between items-center">
                    <span
                        style={{ fontSize: '30px', cursor: 'pointer' }}
                        onClick={openNav}
                    >
                        &#9776;
                    </span>
                    <ThemeToggle />
                </div>
                <main className="flex-grow px-4">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default HomeLayout;