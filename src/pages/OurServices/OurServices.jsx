/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const OurServices = ({ ourService }) => {
    const { service_name, image, description, price, id } = ourService;

    return (
        <div>
            <div className="card bg-red-800 shadow-xl text-white font-josefinSans hover:shadow-2xl hover:duration-500 transition transform hover:scale-105">
                <figure>
                    <img className="w-full" src={image} alt="" />
                </figure>
                <div className="card-body ">
                    <h2 className="font-bold card-title hover:px-4 hover:py-2 hover:border hover:border-white hover:w-fit hover:shadow-lg hover:text-blue-500 hover:bg-white hover:rounded-tl-2xl hover:ml-2 hover:duration-500 hover:cursor-pointer ">
                        {service_name}
                    </h2>
                    {
                        description.length > 200 ? <p>{description.slice(0, 100)}<Link
                        to={`/service/${id}`}
                        className="text-xl text-orange-300"><br /> Read more...</Link></p> : <p>{description}</p>
                    }
                    <div className="card-actions justify-between items-center">
                        <div>
                            <p className="hover:underline hover:cursor-pointer">
                                Price: <span className="text-2xl">{price}</span>
                                $
                            </p>
                        </div>
                        <div>


                        {
                        <Link
                        to={`/service/${id}`}
                        className=""> <button className="px-4 py-2 bg-orange-600">
                        Details
                    </button></Link>
                    }

                            {/* <button className="px-4 py-2 bg-orange-600">
                                Details
                            </button> */}
                        </div>
                        <div className="">
                            <button className="px-4 py-2 bg-orange-600">
                                Buy Now!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
