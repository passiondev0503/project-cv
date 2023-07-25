import React, { useEffect } from 'react';
import { Typography } from '@material-tailwind/react';
import GoggleIcon from '../../../assets/Svg/LoginPageSvg/GoogleIcon';
import TwitterIcon from '../../../assets/Svg/LoginPageSvg/TwitterIcon';
import { Link } from "react-router-dom"
import Linkdin from '../../../assets/Svg/LoginPageSvg/Linkdin';


const Login = () => {
useEffect(()=>{
console.log(process.env.REACT_APP_BASE_URL)
},[])

  return (
    <section class="bg-dark-black min-h-screen grid">
      <div class="flex flex-col items-center justify-center px-[15px] pb-8 md:pt-[70px] pt-[30px] md:mx-auto  bg-dark-black">
        <div class=" rounded-xl w-[100%] sm:w-[400px] h-[630px] border border-light-grey">
          <div class=" pt-[100px] px-[25px] sm:px-[30px]  ">
            <h1 class="text-[25px] font-medium text-white text-center pb-[30px]">
              Ready, Set..
            </h1>
            <a href={`${process.env.REACT_APP_BASE_URL}/linkedin`} className='signup_with_social_acc mt-[40px] shadow drop-shadow-3xl flex bg-white py-[16px] rounded-[15px] items-center justify-center gap-[16px]'>
              <Linkdin />
              <Typography className="text-[20px] font-medium text-LoginPage-color">Sign up with LinkedIn</Typography>
            </a>
            <a href={`${process.env.REACT_APP_BASE_URL}/google`} className='signup_with_social_acc mt-[40px] shadow drop-shadow-3xl flex bg-white py-[16px] rounded-[15px] items-center justify-center gap-[16px]'>
              <GoggleIcon />
              <Typography className="text-[20px] font-medium text-LoginPage-color">Sign up with Google</Typography>
            </a>
            <a href={`${process.env.REACT_APP_BASE_URL}/twitter`} className='signup_with_social_acc mt-[40px] shadow drop-shadow-3xl flex bg-white py-[16px] rounded-[15px] items-center justify-center gap-[16px]'>
              <TwitterIcon />
              <Typography className="text-[20px] font-medium text-LoginPage-color">Sign up with Twitter</Typography>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login