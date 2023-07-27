import React from 'react';
import { Typography } from '@material-tailwind/react';
import GoggleIcon from '../../../assets/Svg/LoginPageSvg/GoogleIcon';
import TwitterIcon from '../../../assets/Svg/LoginPageSvg/TwitterIcon';
import Linkdin from '../../../assets/Svg/LoginPageSvg/Linkdin';


const Login = () => {


  return (
    <section className="bg-dark-black min-h-screen grid">
      <div className="flex flex-col items-center justify-center px-[15px] pb-8 md:pt-[70px] pt-[30px] md:mx-auto  bg-dark-black">
        <div className=" rounded-xl w-[100%] sm:w-[400px] h-[630px] border border-light-grey">
          <div className=" pt-[100px] px-[25px] sm:px-[30px]  ">
            <h1 className="text-[25px] font-medium text-white text-center pb-[30px]">
              Ready, Set..
            </h1>
            <a href={`${process.env.REACT_APP_BASE_URL}/auth/linkedin`} className='signup_with_social_acc mt-[40px] shadow drop-shadow-3xl flex bg-white py-[16px] rounded-[15px] items-center justify-center gap-[16px]'>
              <Linkdin />
              <Typography className="text-[20px] font-medium text-LoginPage-color">Sign up with LinkedIn</Typography>
            </a>
            <a href={`${process.env.REACT_APP_BASE_URL}/auth/google`} className='signup_with_social_acc mt-[40px] shadow drop-shadow-3xl flex bg-white py-[16px] rounded-[15px] items-center justify-center gap-[16px]'>
              <GoggleIcon />
              <Typography className="text-[20px] font-medium text-LoginPage-color">Sign up with Google</Typography>
            </a>
            <a href={`${process.env.REACT_APP_BASE_URL}/auth/twitter`} className='signup_with_social_acc mt-[40px] shadow drop-shadow-3xl flex bg-white py-[16px] rounded-[15px] items-center justify-center gap-[16px]'>
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