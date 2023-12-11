/* eslint-disable no-useless-escape */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import SocialSiteLogin from "../SocialSiteLogin/SocialSiteLogin";

const Register = () => {


    const { registerWithEmailPass } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const image = form.get("image");
        const email = form.get("email");
        const password = form.get("password");
        console.log(image, name, email, password);

        

        const uppercaseRegex = /[A-Z]/;
        const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;


        if (!specialCharRegex.test(password)) {
            toast.error("Password should have one special character included", 
            {
                position: "top-center"
            });
            return;
        }

        if (!uppercaseRegex.test(password)) {
            toast.error("Password should have one capital character included", 
            {
                position: "top-center"
            });
            return;
        }

        if (password.length < 0) {
            toast.error("Password should be 6 character or more", 
            {
                position: "top-center"
            });
            return;
        }

        registerWithEmailPass(email, password)
        .then(result => {
            console.log(result.user)

            toast.success(
                "You have successfully created your account"
            );

            updateProfile(result.user, {
                displayName: name,
                photoURL: image
            })
        })
        .catch(error => {
            console.log(error.code)
            console.log(error.message)
        })
    };

    return (
        <div>
            <h2 className="md:w-3/4 lg:w-1/2 mx-auto text-3xl text-center my-10 px-4 py-3 bg-rose-700 hover:drop-shadow-lg cursor-pointer text-white ">
                Please Register
            </h2>

            <form
                onSubmit={handleRegister}
                className="md:w-3/4 lg:w-1/2 mx-auto bg-red-100 px-7 py-4 drop-shadow-lg mb-10"
            >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name..."
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input
                        type="text"
                        name="image"
                        placeholder="Enter your image url..."
                        className="input input-bordered"
                        required
                    />
                </div>
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
                    <button className="px-4 py-3 text-lg w-full bg-rose-700 text-white rounded-md">
                        REGISTER
                    </button>
                </div>
                <p className="text-center mt-7">
                    Already have an account?{" "}
                    <Link className="underline text-red-500" to="/login">
                        Login Now!!
                    </Link>
                </p>
                <SocialSiteLogin></SocialSiteLogin>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Register;
