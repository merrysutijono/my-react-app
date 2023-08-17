import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import myimage from '../assets/myimage.png';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#cbc5c3]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm an aspiring Web Developer.
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
          I am an undergraduate student at UC Davis.
          Currently, working on side projects utilizing React and other
          Javascript libraries.
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#f6f1ee]-500 to-white-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={myimage}  
          alt="my profile"
          className="rounded-2xl mx-auto w-2/3 md:w-full"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;
