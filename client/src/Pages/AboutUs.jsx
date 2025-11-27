 import HomeLayout from '../Layouts/HomeLayout';
import aboutMainImage from "../assets/fullphoto.jpg";
 import { FaUsers, FaBook, FaLaptopCode } from 'react-icons/fa';

     function AboutUs() {
       return (
         <HomeLayout>
           <div className="pt-20 flex flex-col text-white bg-gray-50 dark:bg-gray-900">
             <div className="container mx-auto px-6 py-16">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <h1 className="text-5xl font-bold text-yellow-500 mb-6">
                    About Us
                  </h1>
                  <p className="text-xl text-gray-800 dark:text-gray-300 leading-relaxed">
                    We are a company dedicated to providing the best online learning experience. Our mission is
       to make quality education accessible to everyone, everywhere. We believe in the power of knowledge to
       transform lives and are passionate about creating a platform that is engaging, effective, and affordable.
                  </p>
                </div>
                <div className="w-full lg:w-1/2">
                  <img
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
                    src={aboutMainImage}
                    alt="About Us"
                  />
                </div>
              </div>
    
              <div className="my-16 text-center">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
                  What We Offer
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <FaUsers className="text-5xl text-yellow-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Expert Instructors
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400">
                      Learn from industry experts who are passionate about teaching.
                    </p>
                  </div>
                  <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <FaBook className="text-5xl text-yellow-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Comprehensive Courses
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400">
                      Explore a wide range of courses covering various subjects.
                    </p>
                  </div>
                  <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <FaLaptopCode className="text-5xl text-yellow-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Interactive Learning
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400">
                      Engage with our interactive platform for a better learning experience.
                    </p>
                  </div>
                </div>
              </div>
    
            <div className="my-16">
              <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Our Team
                </h2>
                <div className="carousel w-full rounded-box shadow-xl">
                   <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
       className="w-full" />
       
                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5
       top-1/2">
        
                       <a href="#slide4" className="btn btn-circle">❮</a>
                       <h2 className='text-2xl font-semibold text-gray-900'>U.S.A</h2>
                     <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                  </div>
                  <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
       className="w-full" />
                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5
       top-1/2">
                     <a href="#slide1" className="btn btn-circle">❮</a>
                                            <h2 className='text-2xl font-semibold text-gray-900'>Tokyo</h2>
                       <a href="#slide3" className="btn btn-circle">❯</a>
                   </div>
                  </div>
                 <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
       className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5
       top-1/2">
                       <a href="#slide2" className="btn btn-circle">❮</a>
               <h2 className='text-2xl font-semibold text-gray-900'>Spain</h2>
                      <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                   </div>
                   <div id="slide4" className="carousel-item relative w-full">
                     <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
       className="w-full" />
                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5
       top-1/2">
                      <a href="#slide3" className="btn btn-circle">❮</a>
                <h2 className='text-2xl font-semibold text-gray-900'>Miami</h2>
                       <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                  </div>
                </div>
               </div>
            </div>
          </div>
       </HomeLayout>
     );
    }
 export default AboutUs;