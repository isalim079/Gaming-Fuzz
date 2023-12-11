/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Marquee from "react-fast-marquee";

const About = () => {
    return (
        <div>
            <div className="relative">
                <img
                    className="absolute -z-50 brightness-[40%]"
                    src="https://i.ibb.co/drdRRDd/about-Page.jpg"
                    alt=""
                />
                <div className="max-w-screen-xl mx-auto pt-14 flex">
                    <button className="md:text-2xl font-orbitron px-4 py-3 bg-orange-600 text-white">
                        GamingFUZZ
                    </button>{" "}
                    <Marquee className="text-white gap-2 font-josefinSans md:text-2xl" speed={80}>
                        <span className="text-orange-500 mr-4">BREAKING NEWS: </span>  GamingFuzz Exclusive - First Look at the
                        Next-Gen Console's Game Lineup! Get Ready to Dominate:
                        GamingFuzz Presents the Hottest Tips and Strategies for
                        Your Favorite Titles!
                    </Marquee>
                </div>
                <div className="flex justify-center items-center md:h-screen md:mt-0 mt-10">
                    <div className="md:text-5xl border-4 px-4 py-2 ">
                        <h1 className="text-white font-orbitron group hover:text-blue-500 hover:scale-105 transition-transform duration-300 transform-origin-center cursor-pointer">
                            WELCOME TO <br />
                            Gaming
                            <span className=" group-hover:text-blue-500">
                                FUZZ
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
