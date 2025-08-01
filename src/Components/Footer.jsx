import {BsFacebook, BsInstagram, BsLinkedin, BsTwitterX} from 'react-icons/bs';

function Footer(){
        const currentDate=new Date();
    const year = currentDate.getFullYear();
    return(
<>
        <footer className='relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between bg-gray-800 text-white sm:px-20'>
          <section className='text-lg'>
                Copyright {year} | All rights reserved
          </section>
          <section className='flex items-center justify-center gap-5 text-2xl'>
            <a href="#" className='hover:text-blue-500 transition-all ease-in-out duration-300'><BsFacebook /></a>
            <a href="#" className='hover:text-red-500 transition-all ease-in-out duration-300'><BsInstagram /></a>
            <a href="#" className='hover:text-blue-500 transition-all ease-in-out duration-300'><BsLinkedin /></a>
            <a href="#" className='hover:text-black transition-all ease-in-out duration-300'><BsTwitterX /></a>
          </section>
            </footer>
        </>
    )


}

export default Footer;