import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getRazorPayId, purchaseCourseBundle, verifyUserPayment } from '../Redux/Slices/RazorPaySlice';
import { useNavigate } from 'react-router-dom';

function EnrollmentModal({ isOpen, onClose, courseData }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const razorpayKey = useSelector((state) => state?.razorpay?.key);
    const subscription_id = useSelector((state) => state?.razorpay?.subscription_id);
    const userData = useSelector((state) => state?.auth?.data);

    const coursePrice = courseData?.price || 999;

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    async function handlePaymentVerify(response) {
        const data = {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_subscription_id: response.razorpay_subscription_id,
            razorpay_signature: response.razorpay_signature
        };

        const res = await dispatch(verifyUserPayment(data));
        if (res?.payload?.success) {
            toast.success("Payment verified successfully!");
            onClose();
            navigate('/courses');
        } else {
            toast.error("Payment verification failed");
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.email || !formData.phone || !formData.address) {
            toast.error('Please fill all fields');
            return;
        }

        // Email validation
        if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            toast.error('Please enter a valid email address');
            return;
        }

        // Phone validation (10 digits)
        if (!formData.phone.match(/^[0-9]{10}$/)) {
            toast.error('Please enter a valid 10-digit phone number');
            return;
        }

        // 1. Get Razorpay Key
        const keyResponse = await dispatch(getRazorPayId());
        if (!keyResponse?.payload?.key) {
            toast.error("Could not load payment gateway");
            return;
        }

        // 2. Create Subscription/Order
        const subscriptionResponse = await dispatch(purchaseCourseBundle());
        if (!subscriptionResponse?.payload?.subscription_id) {
            toast.error("Could not initiate transaction");
            return;
        }

        // 3. Open Razorpay Checkout
        const options = {
            key: keyResponse.payload.key,
            subscription_id: subscriptionResponse.payload.subscription_id,
            name: "LMS Platform",
            description: `Enrollment for ${courseData?.title}`,
            theme: {
                color: "#F37254"
            },
            prefill: {
                name: formData.name,
                email: formData.email,
                contact: formData.phone
            },
            handler: handlePaymentVerify
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-yellow-500 text-white p-6 flex justify-between items-center rounded-t-lg z-10">
                    <h2 className="text-2xl font-bold">Enroll in Course</h2>
                    <button
                        onClick={onClose}
                        className="text-white hover:text-gray-200 transition-colors"
                        aria-label="Close modal"
                    >
                        <MdClose className="text-3xl" />
                    </button>
                </div>

                <div className="p-6">
                    {/* Course Info */}
                    <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {courseData?.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                            {courseData?.description}
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="text-2xl font-bold text-yellow-600 dark:text-yellow-500">
                                ₹{coursePrice}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                One-time payment
                            </span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* User Details Section */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                Your Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your full name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="your.email@example.com"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="10-digit mobile number"
                                        maxLength="10"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                        Address *
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        placeholder="Your address"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Payment Details Section */}
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                Payment Summary
                            </h3>
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700 dark:text-gray-300">Course Fee</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">₹{coursePrice}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700 dark:text-gray-300">Tax (18% GST)</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">₹{Math.round(coursePrice * 0.18)}</span>
                                </div>
                                <div className="border-t border-gray-300 dark:border-gray-600 pt-3 flex justify-between items-center">
                                    <span className="text-lg font-bold text-gray-900 dark:text-white">Total Amount</span>
                                    <span className="text-2xl font-bold text-yellow-600 dark:text-yellow-500">
                                        ₹{coursePrice + Math.round(coursePrice * 0.18)}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                                <p className="text-sm text-blue-800 dark:text-blue-200">
                                    <strong>Payment Methods:</strong> Credit Card, Debit Card, UPI, Net Banking
                                </p>
                                <p className="text-sm text-blue-800 dark:text-blue-200 mt-2">
                                    <strong>Secure Payment:</strong> Your payment information is encrypted and secure.
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-semibold"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="flex-1 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                            >
                                Proceed to Payment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EnrollmentModal;
