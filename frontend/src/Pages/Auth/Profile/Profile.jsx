
import React, { useState, useEffect, useRef } from 'react';
import { Typography } from '@material-tailwind/react';
import UserIcon from '../../../assets/Svg/ProfileSvg/UserIcon';
import PencilIcon from '../../../assets/Svg/ProfileSvg/PencilIcon';
import PhoneIcon from '../../../assets/Svg/ProfileSvg/PhoneIcon';
import CalenderIcon from '../../../assets/Svg/ProfileSvg/CalenderIcon';
import EmailIcon from '../../../assets/Svg/ProfileSvg/EmailIcon';
import WebsiteUrlIcon from '../../../assets/Svg/ProfileSvg/WebsiteUrlIcon';
import FormLinkdin from '../../../assets/Svg/ProfileSvg/FormLinkdin';
import FormTwitter from '../../../assets/Svg/ProfileSvg/FormTwitter';
import FormYoutube from '../../../assets/Svg/ProfileSvg/FormYoutube';
import BackArrow from '../../../assets/Svg/ProfileSvg/BackArrow';
import { Spinner } from "@material-tailwind/react";
import '../../Home/home.css';

import { useDispatch, useSelector } from "react-redux"
import { getProfileData, updateProfileData, getImageIDRequest } from '../../../Redux/Actions/Profile/profileAction';


const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  dateOfBirth: "",
  websiteUrl: "",
  linkedinUrl: "",
  twitterUrl: "",
  youtubeUrl: "",
  location: "",
  email: "",
}


const Profile = () => {

  const [profileData, setProfileData] = useState(initialState)
  const inputElement = useRef(null);


  const dispatch = useDispatch()
  const { data, updatedProfile, isProfileUpdated, updateProfileError, imageData } = useSelector((state) => state.profile)

  const imageUrl = imageData && imageData[0] && imageData[0].url ? imageData[0].url : data?.profilePhotoUrl


  const profilehandle = (event) => {
    const { name, value } = event.target;
    setProfileData({
      ...profileData, [name]: value
    })
  }
  useEffect(() => {
    dispatch(getProfileData())
  }, [])

  useEffect(() => {
    dispatch(getProfileData())
  }, [updatedProfile])

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const formData = new FormData()
    formData.append("files", file)

    dispatch(getImageIDRequest(formData))
  };

  const handleImageUpload = () => {
    inputElement.current?.click();
  };

  useEffect(() => {
    setProfileData({
      photoUploadId: data?.photoUploadId,
      firstName: data?.firstName,
      lastName: data?.lastName,
      phoneNumber: data?.phoneNumber,
      dateOfBirth: data?.dateOfBirth?.split("T")[0],
      websiteUrl: data?.websiteUrl,
      linkedinUrl: data?.linkedinUrl,
      twitterUrl: data?.twitterUrl,
      youtubeUrl: data?.youtubeUrl,
      location: data?.location,
      email: data?.email,
    }
    )

  }, [data])


  const submitHandle = () => {
    if (imageData) {
      const imageID = imageData && imageData[0] && imageData[0]._id
      const updatedFields = { ...profileData, ["photoUploadId"]: imageID }
      dispatch(updateProfileData(updatedFields))
    } else {
      dispatch(updateProfileData(profileData))
    }

  }


  return (
    <div className='bg-dark-black' style={{ height: "calc(100vh - 90px)", }}>
      <div class="flex flex-col items-center justify-center px-[15px] md:pt-[5px] pt-[30px]  md:mx-auto  bg-dark-black">
        <div class=" rounded-xl w-[100%] lg:w-[400px] h-[650px] border border-light-grey">
          <div className=" pt-[10px] pb-[10px] px-[25px] sm:px-[30px]  ">
            <div className='relative md:hidden'>
              <div className='absolute top-[7px] left-[9px]'>
                <BackArrow />
              </div>
              <button className=' bg-aiWriter-color text-grey-color text-[12px] font-normal rounded-[50px] py-[4px] w-[68px] '>Back</button>
            </div>
            <h1 class="md:m-[0px] mt-[-32px] text-[25px] font-semibold text-white text-center pb-[15px]">
              Your Profile
            </h1>
            <div className="click_to_upload w-fit m-auto border border-light-grey rounded-[15px] w-[100px] h-[100px] relative cursor-pointer">
              {
                data && data?.profilePhotoUrl ? (
                  <>
                    <img src={imageUrl} alt='image not found ' className='h-[100px] w-[100px] rounded-[15px]' />
                  </>
                ) : (
                  <>
                    <Typography className="text-[12px] text-light-grey">Click to upload</Typography>
                    <UserIcon />
                  </>


                )
              }



              <div onClick={handleImageUpload} className="absolute top-[-12px] right-[-7px] w-[25px] h-[25px] rounded-[100px] bg-pruple-color flex justify-center items-center ">
                <PencilIcon />
                <input
                  ref={inputElement}
                  type="file"
                  style={{ visibility: 'hidden', display:'none' }}
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className="pt-[10px]">
              <div className='flex gap-[8px]'>
                <input value={profileData?.firstName} onChange={profilehandle} name="firstName" type='text' className='text-white font-normal text-[14px] placeholder:text-light-grey placeholder:text-[14px] border border-light-grey focus:border-light-grey bg-aiWriter-color w-full py-[8px] px-[18px] rounded-[10px] focus-visible:outline-none ' size="lg" placeholder="First Name" />
                <input value={profileData?.lastName} onChange={profilehandle} name='lastName' type='text' className='text-white text-normal text-[14px] placeholder:text-light-grey placeholder:text-[14px] border border-light-grey focus:border-light-grey bg-aiWriter-color w-full py-[8px] px-[18px] rounded-[10px] focus-visible:outline-none' size="lg" placeholder="Last Name" />
              </div>
              <div className='mt-[15px] relative'>
                <input value={profileData?.phoneNumber} onChange={profilehandle} name="phoneNumber" type='text' className='text-white font-normal text-[14px] placeholder:text-light-grey placeholder:text-[14px] border border-light-grey focus:border-light-grey bg-aiWriter-color w-full py-[8px] px-[18px] rounded-[10px] focus-visible:outline-none' size="lg" placeholder="Phone Number" />
                <div className='absolute right-[9px] top-[10px]'>
                  <PhoneIcon />
                </div>
              </div>
              <div className='mt-[15px] relative'>
                <input value={profileData?.dateOfBirth} onChange={profilehandle} name='dateOfBirth' type='text' className='text-white font-normal text-[14px] placeholder:text-light-grey placeholder:text-[14px] border border-light-grey focus:border-light-grey bg-aiWriter-color w-full py-[8px] px-[18px] rounded-[10px] focus-visible:outline-none' size="lg" placeholder="Date of Birth" />
                <div className='absolute right-[9px] top-[10px]'>
                  <CalenderIcon />
                </div>
              </div>
              <div className='mt-[15px] relative'>
                <input value={profileData?.email} onChange={profilehandle} name="email" type='email' className='text-white font-normal text-[14px] placeholder:text-light-grey placeholder:text-[14px] border border-light-grey focus:border-light-grey bg-aiWriter-color w-full py-[8px] px-[18px] rounded-[10px] focus-visible:outline-none' size="lg" placeholder="Email Address" />
                <div className='absolute right-[9px] top-[10px]'>
                  <EmailIcon />
                </div>
              </div>
              <div className='mt-[15px] relative'>
                <input value={profileData?.websiteUrl} onChange={profilehandle} name="websiteUrl" type='text' className='text-white font-normal text-[14px] placeholder:text-light-grey placeholder:text-[14px] border border-light-grey focus:border-light-grey bg-aiWriter-color w-full py-[8px] px-[18px] rounded-[10px] focus-visible:outline-none' size="lg" placeholder="Your Website URL" />
                <div className='absolute right-[9px] top-[10px]'>
                  <WebsiteUrlIcon />
                </div>
              </div>
              <div className='mt-[15px] relative'>
                <input value={profileData?.linkedinUrl} onChange={profilehandle} name="linkedinUrl" type='text' className='text-white font-normal text-[14px] placeholder:text-light-grey placeholder:text-[14px] border border-light-grey focus:border-light-grey bg-aiWriter-color w-full py-[8px] px-[18px] rounded-[10px] focus-visible:outline-none' size="lg" placeholder="Linkedin " />
                <div className='absolute right-[9px] top-[10px]'>
                  <FormLinkdin />
                </div>
              </div>
              <div className='mt-[15px] relative'>
                <input value={profileData?.twitterUrl} onChange={profilehandle} name="twitterUrl" type='text' className='text-white font-normal text-[14px] placeholder:text-light-grey placeholder:text-[14px] border border-light-grey focus:border-light-grey bg-aiWriter-color w-full py-[8px] px-[18px] rounded-[10px] focus-visible:outline-none' size="lg" placeholder="Twitter" />
                <div className='absolute right-[9px] top-[10px]'>
                  <FormTwitter />
                </div>
              </div>
              <div className='mt-[15px] relative'>
                <input value={profileData?.youtubeUrl} onChange={profilehandle} name='youtubeUrl' type='text' className='text-white font-normal text-[14px] placeholder:text-light-grey placeholder:text-[14px] border border-light-grey focus:border-light-grey bg-aiWriter-color w-full py-[8px] px-[18px] rounded-[10px] focus-visible:outline-none' size="lg" placeholder="YouTube" />
                <div className='absolute right-[9px] top-[10px]'>
                  <FormYoutube />
                </div>
              </div>
              {updateProfileError && <Typography className="text-[#ef4444]">{updateProfileError}</Typography>}
              <div className='mt-[15px] '>
                <button onClick={submitHandle} className='bg-green-color w-full py-[10px] rounded-[8px] text-[12px] font-bold text-white'> {isProfileUpdated ? <Spinner style={{ margin: "auto" }} /> : "Save"}</button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;