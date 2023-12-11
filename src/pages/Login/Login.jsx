/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import SocialSiteLogin from "../SocialSiteLogin/SocialSiteLogin";


const Login = () => {

    const { loginWithEmailPass } = useContext(AuthContext);

    const location = useLocation()

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");




        loginWithEmailPass(email, password)
        .then(result => {
            console.log(result.user)

            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.log(error.code)
            console.log(error.message)

            if (error.code === "auth/invalid-login-credentials") {
                toast.error("Email and password doesn't match", {
                    position: 'top-center'
                });
            }
            
            
           
        })
    };

    return (
        <div>
            <h2 className="md:w-3/4 lg:w-1/2 mx-auto px-4 py-3 bg-red-500 hover:drop-shadow-lg cursor-pointer text-white text-3xl text-center my-10">
                Please Login
            </h2>

            <form
                onSubmit={handleLogin}
                className="md:w-3/4 lg:w-1/2 mx-auto bg-red-100 px-7 py-4 drop-shadow-lg"
            >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email..."
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password..."
                        className="input input-bordered"
                        required
                    />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                            Forgot password?
                        </a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="px-4 py-3 text-lg w-full bg-red-500 text-white rounded-md">
                        LOGIN
                    </button>
                </div>
                <p className="text-center mt-7">
                    Don't have an account?{" "}
                    <Link className="underline text-red-500" to="/register">
                        Register Now!!
                    </Link>
                </p>
            <SocialSiteLogin></SocialSiteLogin>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;
