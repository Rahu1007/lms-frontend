import React, { useEffect } from 'react';
import HomeLayout from '../Layouts/HomeLayout';
import CourseCard from '../Components/CourseCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../Redux/Slices/CourseSlice';

function AllCourses() {
    const dispatch = useDispatch();
    const { courses } = useSelector((state) => state.course);

    async function loadCourses() {
        await dispatch(getAllCourses());
    }

    useEffect(() => {
        loadCourses();
    }, []);

    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-20 pl-20 flex flex-col gap-10 text-white">
                <h1 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-10">
                    Explore all courses
                </h1>
                <div className="mb-10 flex flex-wrap gap-14">
                    {courses?.map((element) => {
                        return <CourseCard key={element._id} data={element} />
                    })}
                </div>
            </div>
        </HomeLayout>
    );
}

export default AllCourses;
