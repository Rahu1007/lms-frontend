import { Link } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";

function HomePage() {
  return (
    <HomeLayout>
      <div className="pt-10 text-gray-500 dark:text-white flex flex-col lg:flex-row items-center justify-center gap-10 mx-4 lg:mx-16 h-[90vh]">
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl text-yellow-500 lg:text-5xl font-semibold">
            Find Out The Best
            <span className="text-yellow-500 font-bold block mt-2">
              Online Courses
            </span>
          </h1>
          <p className="hover:text-xl text-gray-700">
            We have a large library of courses taught by highly skilled and
            qualified faculties at a very affordable cost.
         
          </p>
          <div className="space-x-6">
            <Link to="/courses">
              <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg  text-white-700 cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Explore courses
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-yellow-500 px-5 py-3 text-gray-700 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            alt="homepage image"
            className="w-full h-auto rounded-lg shadow-lg"
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </HomeLayout>
  );
}

export default HomePage;
