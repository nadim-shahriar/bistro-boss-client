import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoGoogle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import signUpImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { use, useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../providers/AuthContext";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";



const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext)

    const onSubmit = (data) => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log("User Profile info Updated")
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log(res.data)
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User Created Successfully.",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')

                                }
                            })


                    })
                    .catch(error => console.log(error))
            })
    }
    console.log(watch("example"))

    // const captchaRef = useRef(null)
    // const [disable, setDisable] = useState(true)

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res=>{
                console.log(res.user)
                navigate('/')
            })
    }


    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, [])

    // const handleSignUp = e => {
    //     e.preventDefault();
    //     const form = e.target
    //     const name = form.name.value
    //     const email = form.email.value
    //     const password = form.password.value
    //     console.log(name, email, password)

    //     createUser(email, password)
    //         .then(result => {
    //             const user = result.user
    //             console.log(user)
    //         })
    // }

    // const handleValidateCaptcha = () => {
    //     const user_captcha_value = captchaRef.current.value
    //     console.log(user_captcha_value)

    //     // onChange functionality
    //     // if (user_captcha_value.length === 6 && validateCaptcha(user_captcha_value)) {
    //     //     setDisable(false);
    //     // }

    //     if (validateCaptcha(user_captcha_value)) {
    //         setDisable(false)
    //     }
    //     else {
    //         setDisable(true)
    //     }
    // }

    return (
        <div className="bgImage p-20">
            <div className="hero min-h-screen">
                <div className="hero-content py-10 px-32 border-[#00000040] shadow-2xl flex flex-row-reverse gap-20">
                    <div className="text-center w-1/2 lg:text-left">
                        <img src={signUpImg} alt="" />
                    </div>
                    <div className="card w-1/2  shrink-0 ">
                        <div className="">
                            <h3 className="text-3xl font-bold text-center my-5">Sign Up</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                                <label className="label text-lg font-bold text-black">Name</label>
                                <input {...register("name", { required: true })} name="name" type="text" className="input w-full h-[50px] " placeholder="Name" />
                                {errors.name && <span className="text-red-700">Name field is required </span>}

                                <label className="label text-lg font-bold text-black">Photo URL</label>
                                <input {...register("photoURL", { required: true })} type="text" className="input w-full h-[50px] " placeholder="Name" />
                                {errors.photoURL && <span className="text-red-700">Photo URL is required </span>}

                                <label className="label text-lg font-bold text-black">Email</label>
                                <input {...register("email", { required: true })} name="email" type="email" className="input w-full h-[50px] " placeholder="Email" />
                                {errors.email && <span className="text-red-700">Email field is required </span>}


                                <label className="label text-lg font-bold text-black">Password</label>
                                <input {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" type="password" className="input h-[50px] w-full" placeholder="Password" />
                                {/* {errors.password && <span className="text-red-700">Password field is required </span>} */}
                                {errors.password?.type === "required" &&
                                    <p className="text-red-700">Password field is required</p>}
                                {errors.password?.type === "minLength" &&
                                    <p className="text-red-700">Password Must be 6 character</p>}
                                {errors.password?.type === "pattern" &&
                                    <p className="text-red-700">Password Must includes One Upper Character, One lower Character, One special character & One Number </p>}


                                <div className="mb-4"><a className="link link-hover">Forgot password?</a></div>
                                {/* <div>
                                    <label className="label text-lg mb-3 font-bold text-black">Captcha</label>
                                    <LoadCanvasTemplate />
                                    <input onChange={handleValidateCaptcha} ref={captchaRef} name="captcha" type="text" className="input my-3 h-[50px] w-full" placeholder="Captcha" />
                                    <input ref={captchaRef} name="captcha" type="text" className="input  h-[50px] w-full" placeholder="Captcha" />
                                    <input onClick={handleValidateCaptcha} className="btn bg-[#e0a03fde] h-[50px] text-white text-lg font-semibold " type="submit" value="Verify" />
                                </div> */}
                                <input className="btn bg-[#e0a03fde] h-[50px] text-white text-lg font-semibold mt-4" type="submit" value="signUp" />
                            </form>
                            <Link to={'/login'}><p className="text-[#D1A054B2]  hover:underline text-center my-3">Already registered? Go to log in</p></Link>
                            <p className="text-center">Or Sign In With</p>
                            <div className="flex mt-3 gap-7 justify-center text-[#444444] text-lg">
                                <button className="border-2 hover:bg-gray-300 p-3 rounded-full" href=""><TiSocialFacebook></TiSocialFacebook></button>
                                <button onClick={handleGoogleSignIn} className="border-2 hover:bg-gray-300 p-3 rounded-full" href=""><IoLogoGoogle></IoLogoGoogle></button>
                                <button className="border-2 hover:bg-gray-300 p-3 rounded-full" href=""><FaGithub></FaGithub></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div className="bgImage p-20">
        //     <div className="hero min-h-screen">
        //         <div className="hero-content py-10 px-32 border-[#00000040] shadow-2xl flex flex-row-reverse gap-20">
        //             <div className="text-center w-1/2 lg:text-left">
        //                 <img src={signUpImg} alt="" />
        //             </div>
        //             <div className="card w-1/2  shrink-0 ">
        //                 <div className="">
        //                     <h3 className="text-3xl font-bold text-center my-5">Sign Up</h3>
        //                     <form onSubmit={handleSignUp} className="fieldset">
        //                         <label className="label text-lg font-bold text-black">Name</label>
        //                         <input name="name" type="text" className="input w-full h-[50px] " placeholder="Name" />
        //                         <label className="label text-lg font-bold text-black">Email</label>
        //                         <input name="email" type="email" className="input w-full h-[50px] " placeholder="Email" />
        //                         <label className="label text-lg font-bold text-black">Password</label>
        //                         <input name="password" type="password" className="input h-[50px] w-full" placeholder="Password" />
        //                         <div className="mb-4"><a className="link link-hover">Forgot password?</a></div>
        //                         <div>
        //                             <label className="label text-lg mb-3 font-bold text-black">Captcha</label>
        //                             <LoadCanvasTemplate />
        //                             {/* <input onChange={handleValidateCaptcha} ref={captchaRef} name="captcha" type="text" className="input my-3 h-[50px] w-full" placeholder="Captcha" /> */}
        //                             <input ref={captchaRef} name="captcha" type="text" className="input  h-[50px] w-full" placeholder="Captcha" />
        //                             <input onClick={handleValidateCaptcha} className="btn bg-[#e0a03fde] h-[50px] text-white text-lg font-semibold " type="submit" value="Verify" />
        //                         </div>
        //                         <input disabled={disable} className="btn bg-[#e0a03fde] h-[50px] text-white text-lg font-semibold mt-4" type="submit" value="signUp" />
        //                     </form>
        //                     <Link to={'/login'}><p className="text-[#D1A054B2] hover:underline text-center my-3">Already registered? Go to log in</p></Link>
        //                     <p className="text-center">Or Sign In With</p>
        //                     <div className="flex mt-3 gap-7 justify-center text-[#444444] text-lg">
        //                         <a className="border-2 hover:bg-gray-300 p-3 rounded-full" href=""><TiSocialFacebook></TiSocialFacebook></a>
        //                         <a className="border-2 hover:bg-gray-300 p-3 rounded-full" href=""><IoLogoGoogle></IoLogoGoogle></a>
        //                         <a className="border-2 hover:bg-gray-300 p-3 rounded-full" href=""><FaGithub></FaGithub></a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default SignUp;