import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../Redux/Slices/AuthSlice';
import HomeLayout from '../Layouts/HomeLayout';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: '',
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setLoginDetails({
            ...loginDetails,
            [name]: value,
        });
    }

    async function onLogin(e) {
        e.preventDefault();
        if (!loginDetails.email || !loginDetails.password) {
            // You can add a toast notification here
            return;
        }

        const response = await dispatch(login(loginDetails));
        if (response?.payload?.success) {
            navigate('/');
        }

        setLoginDetails({
            email: '',
            password: '',
        });
    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center min-h-[90vh]">
                <form
                    onSubmit={onLogin}
                    className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]"
                >
                    <h1 className="text-center text-2xl font-bold">Login Page</h1>

                    <div className="flex flex-col gap-1">
                        <label className="font-semibold" htmlFor="email">
                            Email
                        </label>
                        <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="bg-transparent px-2 py-1 border"
                            value={loginDetails.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-semibold" htmlFor="password">
                            Password
                        </label>
                        <input
                            required
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            className="bg-transparent px-2 py-1 border"
                            value={loginDetails.password}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
                    >
                        Login
                    </button>

                    <p className="text-center">
                        Don't have an account?{' '}
                        <Link to="/signup" className="link text-accent-focus">
                            Signup
                        </Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    );
}

export default Login;
