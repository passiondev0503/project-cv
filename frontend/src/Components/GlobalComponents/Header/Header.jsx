import React, { useState } from "react";
import {
    Navbar,

    Typography,
    Button,
    Menu,
    MenuHandler,

    Avatar,

} from "@material-tailwind/react";
import ExportIcon from "../../../assets/Svg/MobileViewSvg/ExportIcon";
import { Link } from "react-router-dom"


function ProfileMenu() {
    const [ProfileToggle, setProfileTogle] = useState(false)
    const handleProfileButton = () => {
        setProfileTogle(!ProfileToggle)
    }


    return (
        <Menu placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 py-0.5 pr-2 pl-0.5 ml-auto hover:bg-transparent rounded-none"
                >
                    <div className="text-right me-2 hidden	md:block">
                        <Typography variant="h1" className="normal-case text-light-grey text-xs	font-medium	">
                            Haroon
                        </Typography>
                        <Typography variant="h6" className="normal-case text-light-grey text-[10px]	font-normal	">
                            haroon@gmail.com
                        </Typography>
                    </div>
                    <div className="bg-white w-[40px] h-[40px] flex justify-center items-center rounded-[10px] me-[5px] block md:hidden ">
                        <ExportIcon />
                    </div>
                    <Avatar
                        onClick={handleProfileButton}
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border  p-0.5 border-2 border-pruple-color"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />

                </Button>
            </MenuHandler>
            {

                ProfileToggle && (
                    <>
                        <div className="profile_dropdown absolute top-[74px] right-0 grid bg-white py-[12px] px-[9px] rounded-[10px]">
                            <Link to="/profile" className="px-[22px] py-[6px] rounded-[10px] text-[14px] font-normal text-black-color hover:bg-dropdownHover-color">Profile</Link>
                            <Link to="" className="px-[22px] py-[6px] rounded-[10px] text-[14px] font-normal text-black-color hover:bg-dropdownHover-color">Billing</Link>
                            <Link to="" className="px-[22px] py-[6px] rounded-[10px] text-[14px] font-normal text-logout-color hover:bg-dropdownHover-color">Logout</Link>
                        </div>
                    </>
                )
            }

        </Menu>
    );
}



export default function Header() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);


    return (
        <Navbar className="bg-opacity-100 p-2 shadow-none max-w-screen-0xl bg-[#18191b] rounded-none border-transparent py-4 px-5 relative z-10">
            <div className="relative mx-auto flex items-end text-blue-gray-900">
                <div className="cv_builder_heading">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 ml-2 cursor-pointer font-medium text-grey-color"
                    >
                        Resume
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        className=" cursor-pointer font-medium text-[25px] 	text-white font-medium"
                    >
                        CV Builder
                    </Typography>
                </div>
                <ProfileMenu />
            </div>

        </Navbar>
    );
}