import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#cbc5c3] text-white-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-white flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-white-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Merry Sutijono, nice to meet you.
              </p>
            </div>
            <div>
              <p>
                {" "}
                An aspiring software developer in the process of honing web
                development skills. I'm currently studying at UC Davis. In 
                my free time, I like to learn easy baking recipes and go hiking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
