
import React, { useState } from 'react'
import './home.css'

import SideBarTab from '../../Components/SideBarTab/SideBarTab'
import ExportSvg from '../../assets/Svg/HomePageSvg/ExportSvg'
import { Typography } from '@material-tailwind/react'
import Embed from '../../assets/Svg/HomePageSvg/Embed'
import Close from '../../assets/Svg/HomePageSvg/Close'
import Star from '../../assets/Svg/HomePageSvg/Star'
import Send from '../../assets/Svg/HomePageSvg/Send'

const Home = () => {
    const [sideBarToggle, setSideBarToggle] = useState(false)
    return (
        <>
            <div className={!sideBarToggle ? `home-wrapper` : "home_wrapper_full"}>
                <div className=" bg-dark-black">
                    <SideBarTab toggleProp={setSideBarToggle} />
                </div>
                <div className=" bg-home-white-smoke relative w-full">
                    <div className='pt-[90px]'>
                        <div className='shadow shadow-[0_1px_10px_0px_rgba(155, 126, 219, 0.20)] blank-page h-[520px] w-[400px] bg-white m-auto'></div>
                        <div className='add_new_page_button text-center py-[18px] relative'>
                            <button className='flex gap-5 justify-center m-auto border border-[#E7E8E9] bg-white w-[400px] py-2 text-grey-color text-[11px] rounded-[10px]'>Add new page <span>+</span></button>
                            <div className='ask_ai absolute bottom-[18px] right-[110px]'>
                                <div className='reltive '>
                                    <div className='absolute top-[9px] left-3'>
                                        <Star />
                                    </div>
                                    <input type="text" placeholder='Ask AI to edit or generate...' class="placeholder:text-[11px] text-AiInput-color
                                     py-2 rounded-[20px] w-[250px] ps-8 border-2 text-[11px] border-InputBorder-color  focus:outline-none border-gradient"  />
                                    <div className='absolute top-[11px] right-3.5'>
                                        <Send />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="export_file  pt-2.5 pe-2.5 absolute top-2.5 right-2.5">
                        <div className='export_button flex justify-end'>
                            <button class="rounded-[10px] bg-white px-3.5 py-3 text-sm font-normal flex gap-3 shadow shadow-[0_1px_10px_0px_rgba(155, 126, 219, 0.20)]"> <ExportSvg /> Export</button>
                        </div>
                        <div className='export_file_detail flex justify-end pt-2'>
                            <div className='export-fie-inner p-3 shadow shadow-[0_1px_10px_0px_rgba(155, 126, 219, 0.20)] bg-white rounded-[5px]'>
                                <div className='close_icon flex justify-end cursor-pointer'><Close /> </div>
                                <Typography variant="h5" className='flex items-center text-xs font-normal gap-3 justify-center'><Embed /> HTML Embed Code</Typography>
                                <div className='mx-2.5'>
                                    <div className='export-features-inner py-2.5'><Typography variant="h6" className=' py-2.5 px-3.5 rounded-[10px] text-light-grey text-[10px] font-medium border  border-light-grey' >div style="position: relative; width: 100%; h</Typography></div>
                                    <button className='copy_btn bg-pruple-color w-full text-xs text-white py-2.5 rounded-[10px] mt-1 mb-2' >Copy</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home