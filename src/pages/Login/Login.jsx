import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoGoogle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import loginImg from '../../assets/others/authentication2.png'
import './Login.css'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from "react";


const Login = () => {
    const captchaRef = useRef(null)
    const [disable, setDisable] = useState(true)

    useEffect(() => {

        loadCaptchaEnginge(6);

    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value
        console.log(user_captcha_value)

        // onChange functionality
        // if (user_captcha_value.length === 6 && validateCaptcha(user_captcha_value)) {
        //     setDisable(false);
        // }

        if(validateCaptcha(user_captcha_value)){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }

    return (
        <div className="bgImage p-20">
            <div className="hero min-h-screen">
                <div className="hero-content py-10 px-32 border-[#00000040] shadow-2xl flex gap-20">
                    <div className="text-center w-1/2 lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card w-1/2  shrink-0 ">
                        <div className="">
                            <h3 className="text-3xl font-bold text-center my-5">Login</h3>
                            <form onSubmit={handleLogin} className="fieldset">
                                <label className="label text-lg font-bold text-black">Email</label>
                                <input name="email" type="email" className="input w-full h-[50px] " placeholder="Email" />
                                <label className="label text-lg font-bold text-black">Password</label>
                                <input name="password" type="password" className="input h-[50px] w-full" placeholder="Password" />
                                <div className="mb-4"><a className="link link-hover">Forgot password?</a></div>
                                <div>
                                    <label className="label text-lg mb-3 font-bold text-black">Captcha</label>
                                    <LoadCanvasTemplate />
                                    {/* <input onChange={handleValidateCaptcha} ref={captchaRef} name="captcha" type="text" className="input my-3 h-[50px] w-full" placeholder="Captcha" /> */}
                                    <input ref={captchaRef} name="captcha" type="text" className="input  h-[50px] w-full" placeholder="Captcha" />
                                    <input onClick={handleValidateCaptcha} className="btn bg-[#e0a03fde] h-[50px] text-white text-lg font-semibold " type="submit" value="Verify" />
                                </div>
                                <input disabled={disable} className="btn bg-[#e0a03fde] h-[50px] text-white text-lg font-semibold mt-4" type="submit" value="Login" />
                            </form>
                            <p className="text-[#D1A054B2] text-center my-3">New here? Create a New Account</p>
                            <p className="text-center">Or Sign In With</p>
                            <div className="flex mt-3 gap-7 justify-center text-[#444444] text-lg">
                                <a className="border-2 hover:bg-gray-300 p-3 rounded-full" href=""><TiSocialFacebook></TiSocialFacebook></a>
                                <a className="border-2 hover:bg-gray-300 p-3 rounded-full" href=""><IoLogoGoogle></IoLogoGoogle></a>
                                <a className="border-2 hover:bg-gray-300 p-3 rounded-full" href=""><FaGithub></FaGithub></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;