
import React, { useState, useEffect, useRef , ChangeEvent} from 'react';
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
import { getProfileData, updateProfileData } from '../../../Redux/Actions/Profile/profileAction';
import LocationIcon from '../../../assets/Svg/ProfileSvg/LocationIcon';
import { AppDispatch, RootState } from '../../../Store/store';
import { getImageIDRequest } from '../../../Redux/Actions/ImageUpload/imageUpload';



interface initialType {
  photoUploadId:string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: string;
  websiteUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  youtubeUrl: string;
  location: string;
  email: string;
}
const initialState = {
  photoUploadId:"",
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

  const [profileData, setProfileData] = useState<initialType>(initialState)
  const inputElement = useRef<HTMLInputElement>(null);


  const dispatch = useDispatch<AppDispatch>()
  const { data, updatedProfile, isProfileUpdated, updateProfileError, imageData, is_image_Uploaded } = useSelector((state:RootState) => state.profile)

  const imageUrl = imageData && imageData[0] && imageData[0].url ? imageData[0].url : data?.profilePhotoUrl;

  const profilehandle = (event:React.ChangeEvent<HTMLInputElement>) => {
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

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append('files', file);
      dispatch(getImageIDRequest(formData));
    }
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
    <div className='bg-dark-black profile_page' style={{ minHeight: "calc(100vh - 85px)", }}>
      <div className="flex flex-col items-center justify-center px-[15px] md:pt-[5px] pt-[30px]  md:mx-auto  bg-dark-black">
        <div className=" rounded-xl  border border-light-grey">
          <div className=" pt-[10px] pb-[15px] px-[25px] sm:px-[30px]  ">
            <div className='relative md:hidden'>
              <div className='absolute top-[7px] left-[9px]'>
                <BackArrow />
              </div>
              <button className=' bg-aiWriter-color text-grey-color text-[12px] font-normal rounded-[50px] py-[4px] w-[68px] '>Back</button>
            </div>
            <h1 className="md:m-[0px] mt-[-32px] text-[25px] font-semibold text-white text-center pb-[15px]">
              Your Profile
            </h1>
            <div className="click_to_upload m-auto border border-light-grey rounded-[15px] w-[100px] h-[100px] relative cursor-pointer">

              {
                is_image_Uploaded ? (
                  <div className='flex h-[100px]'>
                    <Spinner style={{ margin: "auto" }} />
                  </div>
                ) : (
                  data && data?.profilePhotoUrl || imageData && imageData[0] ? (
                    <>
                      <img src={imageUrl} alt='image not found ' className='h-[100px] w-[100px] rounded-[15px]' />
                    </>
                  ) : (
                    <div onClick={handleImageUpload} className="py-[17px] px-[8px]">
                      <UserIcon />
                      <Typography className="text-[12px] text-light-grey">Click to upload</Typography>
                    </div>
                  )
                )
              }
              <div onClick={handleImageUpload} className="absolute top-[-12px] right-[-7px] w-[25px] h-[25px] rounded-[100px] bg-pruple-color flex justify-center items-center ">
                <PencilIcon />
                <input
                  ref={inputElement}
                  type="file"
                  style={{ visibility: 'hidden', display: 'none' }}
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className="pt-[10px]">
              <div className='flex gap-[8px]'>
                <input value={profileData?.firstName} onChange={profilehandle} name="firstName" type='text' className='text-white font-normal text-[14px] placeholder:text-light-grey placeholder:text-[14px] border border-light-grey focus:border-light-grey bg-aiWriter-color w-full py-[8px] px-[18px] rounded-[10px] focus-visible:outline-none '  placeholder="First Name" />
                <input value={profileData?.lastName} onChange={profilehandle} name='lastName' type='text' className='text-white text-normal text-[14px] placeholder:text-light-grey placeholder:text-[14px] border border-light-grey focus:border-light-grey bg-aiWriter-color w-full py-[8px] px-[18px] rounded-[10px] focus-visible:outline-none'  placeholder="Last Name" />
              </div>
              <div className='mt-[15px] relative'>
                <input value={profileData?.phoneNumber} onChange={profilehandle} name="phoneNumber" type='text' className='text-white font-normal text-[14px] placeholder:text-light-grey placeholder:text-[14px] border border-light-grey focus:border-light-grey bg-aiWriter-color w-full py-[8px] px-[18px] rounded-[10px] focus-visible:outline-none'  placeholder="Phone Number" />
                <div className='absolute right-[9px] top-[10px]'>
                  <PhoneIcon />
                </div>
              </div>
              <div className='mt-[15px] relative'>
                <input value={profileData?.dateOfBirth} onChange={profilehandle} name='dateOfBirth' type='text' className='text-white font-normal text-[14px] placeholder:text-light-grey placeholder:text-[14px] border border-light-grey focus:border-light-grey bg-aiWriter-color w-full py-[8px] px-[18px] rounded-[10px] focus-visible:outline-none'  placeholder="Date of Birth" />
                <div className='absolute right-[9px] top-[10px]'>
                  <CalenderIcon />
                </div>
              </div>
              <div className='mt-[15px] relative'>
                <input value={profileData?.email} onChange={profilehandle} name="email" type='email' className='text-white font-normal text-[14px] placeholder:text-light-grey placeholder:text-[14px] border border-light-grey focus:border-light-grey bg-aiWriter-color w-full py-[8px] px-[18px] rounded-[10px] focus-visible:outline-none'  placeholder="Email Address" />
                <div className='absolute right-[9px] top-[10px]'>
                  <EmailIcon />
                </div>
              </div>
              <div className='mt-[15px] relative'>
                <input value={profileData?.location} onChange={profilehandle} name="location" type='text' className='text-white font-normal text-[14px] placeholder:text-light-grey placeholder:text-[14px] border border-light-grey focus:border-light-grey bg-aiWriter-color w-full py-[8px] px-[18px] rounded-[10px] focus-visible:outline-none'  placeholder="Enter your Location" />
                <div className='absolute right-[9px] top-[10px]'>
                  <LocationIcon/>
                </div>
              </div>
              <div className='mt-[15px] relative'>
                <input value={profileData?.websiteUrl} onChange={profilehandle} name="websiteUrl" type='text' className='text-white font-normal text-[14px] placeholder:text-light-grey placeholder:text-[14px] border border-light-grey focus:border-light-grey bg-aiWriter-color w-full py-[8px] px-[18px] rounded-[10px] focus-visible:outline-none'  placeholder="Your Website URL" />
                <div className='absolute right-[9px] top-[10px]'>
                  <WebsiteUrlIcon />
                </div>
              </div>
              <div className='mt-[15px] relative'>
                <input value={profileData?.linkedinUrl} onChange={profilehandle} name="linkedinUrl" type='text' className='text-white font-normal text-[14px] placeholder:text-light-grey placeholder:text-[14px] border border-light-grey focus:border-light-grey bg-aiWriter-color w-full py-[8px] px-[18px] rounded-[10px] focus-visible:outline-none'  placeholder="Linkedin " />
                <div className='absolute right-[9px] top-[10px]'>
                  <FormLinkdin />
                </div>
              </div>
              <div className='mt-[15px] relative'>
                <input value={profileData?.twitterUrl} onChange={profilehandle} name="twitterUrl" type='text' className='text-white font-normal text-[14px] placeholder:text-light-grey placeholder:text-[14px] border border-light-grey focus:border-light-grey bg-aiWriter-color w-full py-[8px] px-[18px] rounded-[10px] focus-visible:outline-none'  placeholder="Twitter" />
                <div className='absolute right-[9px] top-[10px]'>
                  <FormTwitter />
                </div>
              </div>
              <div className='mt-[15px] relative'>
                <input value={profileData?.youtubeUrl} onChange={profilehandle} name='youtubeUrl' type='text' className='text-white font-normal text-[14px] placeholder:text-light-grey placeholder:text-[14px] border border-light-grey focus:border-light-grey bg-aiWriter-color w-full py-[8px] px-[18px] rounded-[10px] focus-visible:outline-none'  placeholder="YouTube" />
                <div className='absolute right-[9px] top-[10px]'>
                  <FormYoutube />
                </div>
              </div>
              {updateProfileError && updateProfileError?.message && <Typography className="text-[#ef4444]">{updateProfileError?.message}</Typography>}
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