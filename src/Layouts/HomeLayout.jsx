import ThemeToggle from '../Components/ThemeToggle';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { useState } from 'react';

function HomeLayout({ children }) {
    const [isSidenavOpen, setSidenavOpen] = useState(false);

    function openNav() {
        setSidenavOpen(true);
    }

    function closeNav() {
        setSidenavOpen(false);
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
            {/* Sidenav */}
            <div
                id="mySidenav"
                className={`sidenav fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-500 ease-in-out overflow-x-hidden z-50 ${
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
                    <li onClick={closeNav}><Link to="/">Home</Link></li>
                    <li onClick={closeNav}><Link to="/courses">All Courses</Link></li>
                    <li onClick={closeNav}><Link to="/contact">Contact Us</Link></li>
                    <li onClick={closeNav}><Link to="/about">About Us</Link></li>
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