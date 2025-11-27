import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Signup() {
    const navigate = useNavigate();

    const [previewImage, setPreviewImage] = useState("");
    const [signupData, setSignupData] = useState({
        name: '',
        username: '',
        dob: '',
        fatherName: '',
        motherName: '',
        email: '',
        number:'',
        college:'',
        address: '',
        password: '',
        confirmPassword: '',
        avatar: null
    });

    function handleUserInput(e) {
        const { name, value } = e.target;
        setSignupData({
            ...signupData,
            [name]: value,
        });
    }

    function getImage(e) {
        e.preventDefault();
        const uploadedImage = e.target.files[0];

        if(uploadedImage) {
            setSignupData({
                ...signupData,
                avatar: uploadedImage
            });
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function() {
                setPreviewImage(this.result);
            })
        }
    }

    async function createNewAccount(e) {
        e.preventDefault();
        if (
            !signupData.name ||
            !signupData.username ||
            !signupData.dob ||
            !signupData.fatherName ||
            !signupData.motherName ||
            !signupData.email ||
            !signupData.address ||
            !signupData.password ||
            !signupData.confirmPassword ||
            !signupData.avatar
        ) {
            toast.error('Please fill all the details');
            return;
        }
        // email regex javascript
        if(!signupData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            toast.error("Please enter a valid email address");
            return;
        }

        //password regex javascript
        if(!signupData.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
            toast.error("Password must be at least 8 characters long and contain at least one letter and one number");
            return;
        }
        if(signupData.password !== signupData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        // TODO: Dispatch create account action

        //formdata iss lea use kar rahe hai kyuki hume image bhi upload karni hai or data bhi send karna hai
        // so we will use formdata to send the data to the server ys sab same formate mai he ho 
        const formData = new FormData();
        formData.append('name', signupData.name);
        formData.append('username', signupData.username);
        formData.append('dob', signupData.dob);
        formData.append('fatherName', signupData.fatherName);
        formData.append('motherName', signupData.motherName);
        formData.append('email', signupData.email);
        formData.append('number', signupData.number);
        formData.append('college', signupData.college);
        formData.append('address', signupData.address);
        formData.append('password', signupData.password);
        formData.append('avatar', signupData.avatar);

        toast.success('Account created successfully');
        navigate('/login');

        setSignupData({
            name: '',
            username: '',
            dob: '',
            fatherName: '',
            motherName: '',
            email: '',
            number:'',
            college:'',
            address: '',
            password: '',
            confirmPassword: '',
            avatar: null
        });
        setPreviewImage("");
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900  ">
            <div className="w-full max-w-lg p-8 space-y-8 bg-white rounded-lg shadow-md dark:bg-gray-900">
                <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Create a new account</h1>
                <form onSubmit={createNewAccount} className="space-y-6">
                    <div className="flex justify-center">
                        <label htmlFor="image_uploads" className="cursor-pointer">
                            {
                                previewImage ? (
                                    <img className="w-24 h-24 rounded-full m-auto" src={previewImage} alt="avatar" />
                                ) : (
                                    <div className="w-24 h-24 rounded-full m-auto flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg> */}
                                    </div>
                                )
                            }
                        </label>
                        <input onChange={getImage} className="hidden" type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png, .svg" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input
                                type="text"
                                required
                                name="name"
                                id="name"
                                placeholder="Enter your name..."
                                className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={signupData.name}
                                onChange={handleUserInput}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input
                                type="text"
                                required
                                name="username"
                                id="username"
                                placeholder="Enter your username..."
                                className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={signupData.username}
                                onChange={handleUserInput}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                            <input
                                type="date"
                                required
                                name="dob"
                                id="dob"
                                className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={signupData.dob}
                                onChange={handleUserInput}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Father's Name</label>
                            <input
                                type="text"
                                required
                                name="fatherName"
                                id="fatherName"
                                placeholder="Enter your father's name..."
                                className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={signupData.fatherName}
                                onChange={handleUserInput}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mother's Name</label>
                            <input
                                type="text"
                                required
                                name="motherName"
                                id="motherName"
                                placeholder="Enter your mother's name..."
                                className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={signupData.motherName}
                                onChange={handleUserInput}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input
                                type="email"
                                required
                                name="email"
                                id="email"
                                placeholder="Enter your email..."
                                className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={signupData.email}
                                onChange={handleUserInput}
                            />
                        </div>


                             <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number</label>
                            <input
                                type="number"
                                required
                                name="number"
                                id="number"
                                placeholder="Enter your number..."
                                className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={signupData.number}
                                onChange={handleUserInput}
                            />
                        </div>

                                 <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">College Name </label>
                            <input
                                type="text"
                                required
                                name="college"
                                id="college"
                                placeholder="Enter your College Name..."
                                className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={signupData.college}
                                onChange={handleUserInput}
                            />
                        </div>






                        <div className="md:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                            <textarea
                                name="address"
                                id="address"
                                rows="3"
                                placeholder="Enter your address..."
                                className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={signupData.address}
                                onChange={handleUserInput}
                            ></textarea>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input
                                type="password"
                                required
                                name="password"
                                id="password"
                                placeholder="Enter your password..."
                                className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={signupData.password}
                                onChange={handleUserInput}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                            <input
                                type="password"
                                required
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm your password..."
                                className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={signupData.confirmPassword}
                                onChange={handleUserInput}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Create Account
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-indigo-600 hover:underline dark:text-indigo-500">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;