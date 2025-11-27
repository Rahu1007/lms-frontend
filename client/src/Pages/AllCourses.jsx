import { useEffect, useState } from 'react';
import HomeLayout from '../Layouts/HomeLayout';
import CourseCard from '../Components/CourseCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../Redux/Slices/CourseSlice';

// Sample course data for display
const sampleCourses = [
    {
        _id: '1',
        title: 'Web Development Bootcamp',
        description: 'Learn HTML, CSS, JavaScript, React, Node.js and become a full-stack web developer.',
        price: 2999,
        thumbnail: {
            secure_url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'
        }
    },
    {
        _id: '2',
        title: 'Python Programming',
        description: 'Master Python from basics to advanced. Learn data structures, OOP, and build real projects.',
        price: 1999,
        thumbnail: {
            secure_url: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80'
        }
    },
    {
        _id: '3',
        title: 'Data Science & Machine Learning',
        description: 'Dive into data analysis, visualization, and machine learning with Python and scikit-learn.',
        price: 3999,
        thumbnail: {
            secure_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
        }
    },
    {
        _id: '4',
        title: 'Digital Marketing Masterclass',
        description: 'Learn SEO, social media marketing, content marketing, and grow your online presence.',
        price: 1499,
        thumbnail: {
            secure_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
        }
    },
    {
        _id: '5',
        title: 'Mobile App Development',
        description: 'Build iOS and Android apps with React Native. Create cross-platform mobile applications.',
        price: 2499,
        thumbnail: {
            secure_url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80'
        }
    },
    {
        _id: '6',
        title: 'UI/UX Design Fundamentals',
        description: 'Master design principles, Figma, user research, and create stunning user interfaces.',
        price: 1799,
        thumbnail: {
            secure_url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80'
        }
    }
];

function AllCourses() {
    const dispatch = useDispatch();
    const { courses } = useSelector((state) => state.course);
    const [displayCourses, setDisplayCourses] = useState(sampleCourses);

    async function loadCourses() {
        const result = await dispatch(getAllCourses());
        // If courses are loaded from backend, use them; otherwise use sample data
        if (result.payload?.courses && result.payload.courses.length > 0) {
            setDisplayCourses(result.payload.courses);
        }
    }

    useEffect(() => {
        loadCourses();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Use courses from Redux if available, otherwise use sample courses
    const coursesToDisplay = courses && courses.length > 0 ? courses : displayCourses;

    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-20 px-8 flex flex-col gap-10 text-white">
                <h1 className="text-4xl font-semibold text-center text-gray-900 dark:text-white mb-10">
                    Explore all courses
                </h1>
                <div className="mb-10 flex flex-wrap gap-8 justify-center">
                    {coursesToDisplay?.map((element) => {
                        return <CourseCard key={element._id} data={element} />
                    })}
                </div>
            </div>
        </HomeLayout>
    );
}

export default AllCourses;
