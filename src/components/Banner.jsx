import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="px-4 py-32 bg-red-950 mx-auto">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-7xl font-primary leading-snug font-bold mb-5">
          Welcome to Our Blog
        </h1>
        <p className="text-gray-100 font-primary text-xl lg:w-3/5 mx-auto mb-5">
          Start your blog today and join a community of writters and readers who
          are passionate about sharing their stories and idears. We offer
          everything you need to get started, from helpful tips and tutorials to
          a supportive community of fellow writers.
        </p>

        <div>
            <Link to={'/'} className='inline-flex items-center
            rounded-full transition-all duration-300 ease-in py-2 px-4
             font-medium hover:text-orange-500'>Learn more <FaArrowRight className='mt-1 ml-2' /></Link>
        </div>
      </div>
    </div>
  );
}

export default Banner