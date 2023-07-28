import React, { useState, useEffect } from "react";
import "./style.css";
import {
    TabPanel,
    Menu,
    MenuHandler,
    Button,
    MenuList,
    MenuItem
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import Search from "../../assets/Svg/HomePageSvg/Search";
import EllipsisMenuIcon from "../../assets/Svg/SidebarSvg/EllipsisMenuIcon";
import ProfileSvg from "../../assets/Svg/SidebarSvg/ProfileSvg";
import DeleteSvg from "../../assets/Svg/SidebarSvg/DeleteSvg";
import IamegeUpload from "../../assets/Images/navimage.png";
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../Store/store";
import { getUploadPannelIamges } from "../../Redux/Actions/UploadPannel/uploadPannel";
import { getImageIDRequest } from "../../Redux/Actions/ImageUpload/imageUpload";


const NavImageUpload = () => {

    const dispatch = useDispatch<AppDispatch>()

    const { image_uploaded_data , paginationData } = useSelector((state: RootState) => state.uploadPannel)
    console.log(image_uploaded_data,paginationData, "image_uploaded_data")
    const handleImage =(e:any)=>{
        const file = e.target.files?.[0];
        if(file){
            const formData = new FormData()
            formData.append("files" , file)
            dispatch(getImageIDRequest(formData))
        }
    }
    useEffect(() => {
        dispatch(getUploadPannelIamges())
    }, [])
    return (
        <TabPanel key={4} value={4} className="py-0 px-0">
            <div className="search-input relative">
                <Input
                    type="search"
                    placeholder="Search"
                    className="focus:border-none rounded-[10px] border border-light-grey bg-white placeholder:text-xs"
                    labelProps={{
                        className: "hidden"
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                />
                <div className="search-icon absolute bottom-3.5 right-5">
                    <Search />
                </div>
            </div>
            <div className="mt-[20px]">
                <label className="bg-pruple-color w-full block text-center py-[6px] rounded-[10px] text-[18px] text-white font-normal cursor-pointer ">Upload Files
                    <input type='file' onChange={handleImage} multiple className="hidden" />
                </label>
            </div>
            <div className="upload_images mt-[20px] grid grid-cols-2 gap-5 h-[550px] overflow-y-auto">
                {
                    image_uploaded_data?.map((item: any, index: number) => {
                        return (
                            <>
                                <div className="relative w-[140px] h-[140px] m-auto">
                                    <img src={item.url} alt="" className="rounded-[5px] w-[135px] h-[140px] m-auto" />

                                    <div className="absolute top-[0px] right-[10px]">
                                        <Menu placement="bottom-start">
                                            <MenuHandler>
                                                <Button className="bg-transparent shadow-none hover:shadow-none p-0 rounded-none"><EllipsisMenuIcon /></Button>
                                            </MenuHandler>

                                            <MenuList className="min-w-[130px] py-[5px] px-[5px]">
                                                <MenuItem className="flex justify-start gap-[10px] px-[4px] py-[6px] rounded-[10px] text-[12px] font-normal text-black-color "><ProfileSvg /> Set as Profile</MenuItem>
                                                <MenuItem className="flex justify-start gap-[10px] px-[4px] py-[6px] rounded-[10px] text-[12px] font-normal text-black-color"><DeleteSvg />Delete</MenuItem>
                                            </MenuList>

                                        </Menu>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>



        </TabPanel>
    )
}

export default NavImageUpload
