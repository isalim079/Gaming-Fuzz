/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../../assets/images/backgroundBanner.jpg";

const Banner = () => {
    return (
        <div>
            <div className="relative">
                <img
                    className="w-full h-screen absolute top-0 bottom-0 -z-50 brightness-[40%]"
                    src={banner}
                    alt=""
                />
                <div className="flex flex-col p-10 md:p-0  sm:pt-80 md:pt-0 justify-center items-left h-screen max-w-screen-xl mx-auto">
                    <div>
                        <h1 className="font-orbitron text-gray-100 text-3xl md:text-5xl pt-6 md:pt-0 mb-4">GamingFuzz</h1>
                        <div className="border-2 border-orange-400 w-9/12 mb-5"></div>
                        <h2 className="text-gray-200 font-josefinSans text-base md:text-2xl md:w-9/12">
                            
                            Gaming Fuzz is your ultimate destination for all things gaming. With a vast library of reviews, tips, and guides, it's your one-stop-shop for staying ahead in the gaming world. From in-depth analyses of the latest releases to expert strategies for your favorite titles, Gaming Fuzz has you covered. Join our vibrant community, where gamers from all walks of life come together to share their passion and knowledge. Dive into the world of gaming like never before with Gaming Fuzz!
                        </h2>
                    </div>
                    <div>
                        <button className="text-gray-100 font-orbitron md:mt-7 px-5 py-3 bg-red-800 md:text-xl rounded-tr-lg rounded-bl-lg hover:bg-red-800 hover:text-white hover:px-5 hover:py-3 hover:rounded-md hover:drop-shadow-lg hover:duration-300 ">Find Games</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
