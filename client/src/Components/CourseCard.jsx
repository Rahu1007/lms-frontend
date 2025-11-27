import { useState } from 'react';
import EnrollmentModal from './EnrollmentModal';

function CourseCard({ data }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleEnrollClick() {
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <figure>
                    <img src={data.thumbnail.secure_url} alt={data.title} className="w-full h-48 object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-gray-900 dark:text-white">{data.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">{data.description}</p>
                    <div className="card-actions justify-end mt-4">
                        <button
                            onClick={handleEnrollClick}
                            className="btn btn-primary bg-yellow-500 hover:bg-yellow-600 border-none text-white"
                        >
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>

            <EnrollmentModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                courseData={data}
            />
        </>
    );
}

export default CourseCard;
