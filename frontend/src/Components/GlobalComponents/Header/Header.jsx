import React from "react";
import {
    Navbar,

    Typography,
    Button,
    Menu,
    MenuHandler,

    Avatar,

} from "@material-tailwind/react";


function ProfileMenu() {



    return (
        <Menu placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <div className="text-right me-2	">
                        <Typography variant="h1" className="normal-case text-light-grey text-xs	font-medium	">
                            Haroon
                        </Typography>
                        <Typography variant="h6" className="normal-case text-light-grey text-[10px]	font-normal	">
                            haroon@gmail.com
                        </Typography>
                    </div>
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-blue-500 p-0.5 border-2 border-pruple-color"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />

                </Button>
            </MenuHandler>

        </Menu>
    );
}



export default function Header() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);


    return (
        <Navbar className="p-2 shadow-none max-w-screen-0xl bg-dark-black rounded-none border-transparent py-4 px-5">
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