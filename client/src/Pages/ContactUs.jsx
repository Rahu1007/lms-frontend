import { useState } from 'react';
import HomeLayout from '../Layouts/HomeLayout';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX, BsGithub } from 'react-icons/bs';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import toast from 'react-hot-toast';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill all fields');
            return;
        }

        // Email validation
        if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            toast.error('Please enter a valid email address');
            return;
        }

        toast.success('Message sent successfully! We will get back to you soon.');

        // Reset form
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    }

    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-20 px-8 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto py-16">
                    <h1 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                    Contact Information
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MdEmail className="text-3xl text-yellow-500 mt-1" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                                            <a href="mailto:rahulsharma@example.com" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">
                                                rahulsharma@example.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <MdLocationOn className="text-3xl text-yellow-500 mt-1" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h3>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                India
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                        Follow Me
                                    </h3>
                                    <div className="flex gap-4 text-3xl">
                                        <a
                                            href="https://www.facebook.com/profile.php?id=100018561997805"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-all duration-300"
                                            aria-label="Facebook"
                                        >
                                            <BsFacebook />
                                        </a>
                                        <a
                                            href="https://www.instagram.com/the_mr_sharma_7/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 dark:text-gray-400 hover:text-pink-600 transition-all duration-300"
                                            aria-label="Instagram"
                                        >
                                            <BsInstagram />
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/rahul-kumar-sharma-1a6007283/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 dark:text-gray-400 hover:text-blue-700 transition-all duration-300"
                                            aria-label="LinkedIn"
                                        >
                                            <BsLinkedin />
                                        </a>
                                        <a
                                            href="https://x.com/themrsharma7"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300"
                                            aria-label="Twitter/X"
                                        >
                                            <BsTwitterX />
                                        </a>
                                        <a
                                            href="https://github.com/Rahu1007"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                                            aria-label="GitHub"
                                        >
                                            <BsGithub />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                Send a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="6"
                                        placeholder="Enter your message"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default ContactUs;
