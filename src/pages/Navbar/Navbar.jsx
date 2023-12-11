import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { BiSolidUserCircle } from 'react-icons/bi';


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)
    console.log(user);

    const handleSignOut = () => {
        logOut()
        .then( () => {
            console.log("you have logged out successfully")
        })
        .catch(error => {
            console.log(error.code)
            console.log(error.message)
        })
    }

   
    
    const navLinks = (
        <>
            <div className="text-lg font-normal flex-col md:flex-row flex gap-1 text-center md:text-left md:gap-10 list-none font-josefinSans">
                <li>
                    <NavLink
                        to="/"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                textDecoration: isActive ? "underline" : "",
                                textDecorationColor: isActive ? "red" : "",
                                color: isPending ? "white" : "white",
                            };
                        }}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                textDecoration: isActive ? "underline" : "",
                                textDecorationColor: isActive ? "red" : "",
                                color: isPending ? "white" : "white",
                            };
                        }}
                    >
                        About
                    </NavLink>
                </li>

                {/* <li>
                    <NavLink
                        to="/ourServices"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                textDecoration: isActive ? "underline" : "",
                                textDecorationColor: isActive ? "red" : "",
                                color: isPending ? "white" : "white",
                            };
                        }}
                    >
                        Our Services
                    </NavLink>
                </li> */}
                <li>
                    <NavLink
                        to="/preOrders"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                textDecoration: isActive ? "underline" : "",
                                textDecorationColor: isActive ? "red" : "",
                                color: isPending ? "white" : "white",
                            };
                        }}
                    >
                        Pre-Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/newReleases"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                textDecoration: isActive ? "underline" : "",
                                textDecorationColor: isActive ? "red" : "",
                                color: isPending ? "white" : "white",
                            };
                        }}
                    >
                        New-Releases
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/android"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                textDecoration: isActive ? "underline" : "",
                                textDecorationColor: isActive ? "red" : "",
                                color: isPending ? "white" : "white",
                            };
                        }}
                    >
                        Android
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/pc"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                textDecoration: isActive ? "underline" : "",
                                textDecorationColor: isActive ? "red" : "",
                                color: isPending ? "white" : "white",
                            };
                        }}
                    >
                        PC
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/console"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                textDecoration: isActive ? "underline" : "",
                                textDecorationColor: isActive ? "red" : "",
                                color: isPending ? "white" : "white",
                            };
                        }}
                    >
                        Console
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink
                        to="/login"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                textDecoration: isActive ? "underline" : "",
                                textDecorationColor: isActive ? "red" : "",
                                color: isPending ? "white" : "white",
                            };
                        }}
                    >
                        Login
                    </NavLink>
                </li> */}
            </div>
        </>
    );

    return (
        <div className="bg-red-800 py-2">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto">
                <div>
                    <h1 className="font-orbitron text-2xl font-semibold text-gray-200">
                        GAMING
                    </h1>
                    <h2 className="font-orbitron text-2xl font-semibold text-gray-400">
                        FUZZ
                    </h2>
                </div>
                <div>{navLinks}</div>

                <div>

                    <div>
                    {user ? (
                    <div className="flex items-center">
                        <div className="flex items-center">
                        <div>
                        {
                            user?.photoURL ? <img className="w-10 h-10 rounded-full" src={user?.photoURL} /> : <BiSolidUserCircle className="text-5xl text-white"></BiSolidUserCircle>
                        }
                        </div>
                        <div className="ml-4">
                            {
                                user?.displayName ? <p className="text-white text-xl font-josefinSans underline">{user?.displayName}</p> : ""
                            }
                        </div>
                    </div>
                        <button onClick={handleSignOut} className="ml-4 px-4 py-2 bg-orange-600 text-white font-semibold font-orbitron">
                        Log Out
                    </button>
                    </div>
                ) : (
                    <Link to="/login">
                        <button className="ml-4 px-10 py-2 bg-orange-600 text-white text-xl font-semibold">
                            Login
                        </button>
                    </Link>
                )}
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default Navbar;
