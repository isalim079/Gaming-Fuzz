import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";



const SocialSiteLogin = () => {

    const {handleGoogleLogin, handleGithubLogin} = useContext(AuthContext)

    const location = useLocation()

    const navigate = useNavigate()

    const handleSocialLogin = (media) => {
        
        media()
        .then(res => {
            console.log(res)
            navigate(location?.state ? location.state : '/')
            
        })
        .catch(error => {
            console.log(error.code)
        })
    }

    return (
        <>
            <div className="divider">continue with</div>
            <div className="flex justify-center -mt-4">
                <div>
                <button 
                    onClick={() => handleSocialLogin(handleGoogleLogin)}
                    className="hover:border-red-700 hover:text-red-700 rounded-md mt-5 px-5 justify-center py-2 border border-red-950 flex items-center gap-2 transition duration-300 ease-in-out transform hover:scale-105"><FcGoogle className="text-xl"></FcGoogle>
                    Google
                </button>
                </div>
                <div>
                <button 
                    onClick={() => handleSocialLogin(handleGithubLogin)}
                    className="hover:border-red-700 hover:text-red-700 rounded-md mt-5 px-5 justify-center py-2 border border-red-950 flex items-center gap-2 ml-16 transition duration-300 ease-in-out transform hover:scale-105"> <AiFillGithub className="text-xl"></AiFillGithub>
                    Github
                </button>
                </div>
                
            </div>
        </>
    );
};

export default SocialSiteLogin;