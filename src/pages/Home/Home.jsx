/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import OurServices from "../OurServices/OurServices";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import CallOfDutySec from "../CallOfDutySec/CallOfDutySec";
import GallerySec from "../GallerySec/GallerySec";

const Home = () => {
    const ourServices = useLoaderData();

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    return (
        <div data-aos="flip-right"  className="bg-red-950">
            <div>
            <Banner></Banner>
            </div>
            <div>
                <CallOfDutySec></CallOfDutySec>
            </div>
            <div>
                <GallerySec></GallerySec>
            </div>
            <div className="bg-red-950">
                <div className="my-16">
                <h1 className="text-center font-orbitron  md:text-5xl text-gray-200">Our Services</h1>
                <div className="max-w-xl mx-auto border-2 border-orange-600 mt-3"></div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-screen-xl mx-auto">
                    {ourServices.map((ourService) => (
                        <OurServices
                            key={ourService.id}
                            ourService={ourService}
                        ></OurServices>
                    ))}
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;
