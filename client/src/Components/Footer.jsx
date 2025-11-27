import {BsFacebook, BsInstagram, BsLinkedin, BsTwitterX, BsGithub, } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Footer(){
        const currentDate=new Date();
    const year = currentDate.getFullYear();
    return(
<>
        <footer className='relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between bg-gray-800 text-white sm:px-20'>
          <section className='text-lg'>
                Copyright {year} | All rights reserved
          </section>
          <section>
            <Link to="/courses" className='hover:text-yellow-500 transition-all ease-in-out duration-300'>Courses</Link>
          </section>
          <section className='flex items-center justify-center gap-5 text-2xl'>
            <a href="https://www.facebook.com/profile.php?id=100018561997805" className='hover:text-blue-500 transition-all ease-in-out duration-300'>
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com/the_mr_sharma_7/" className='hover:text-red-500 transition-all ease-in-out duration-300'>
              <BsInstagram />
            </a>
            <a href="https://www.linkedin.com/in/rahul-kumar-sharma-1a6007283/" className='hover:text-blue-500 transition-all ease-in-out duration-300'>
              <BsLinkedin />
            </a>
            <a href="https://x.com/themrsharma7" className='hover:text-black transition-all ease-in-out duration-300'><BsTwitterX /></a>
            <a href="https://github.com/Rahu1007" className='hover:text-gray-100 transition-all ease-in-out duration-300'>
              <BsGithub />
            </a>
           
          </section>
            </footer>
        </>
    )


}

export default Footer;