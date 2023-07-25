
import React, { useState, useRef } from 'react'
// import './home.css'

// import SideBarTab from '../../Components/SideBarTab/SideBarTab'
import ExportSvg from '../../assets/Svg/HomePageSvg/ExportSvg'
import { Typography } from '@material-tailwind/react'
import Embed from '../../assets/Svg/HomePageSvg/Embed'
import Close from '../../assets/Svg/HomePageSvg/Close'
import Star from '../../assets/Svg/HomePageSvg/Star'
import Send from '../../assets/Svg/HomePageSvg/Send'
import AiStarIcon from '../../assets/Svg/HomePageSvg/AiStarIcon'
import { Tooltip } from "@material-tailwind/react";



const Home = () => {
    const [aiToggle, setAiTogle] = useState(false)

    const handleAiButton = () => {
        setAiTogle(!aiToggle)
    }

    return (
        <>

            <div className='pt-[50px] home_inner_page'>
                <div className='shadow shadow-[0_1px_10px_0px_rgba(155, 126, 219, 0.20)] blank-page h-[520px] w-[50%] bg-white m-auto'></div>
                <div className='fixed right-[30px] bottom-[74px] ai_writer '>
                    <Tooltip content="Ai Writer" placement="left" className='tootltip_content text-[10px]  font-medium text-white'>
                        <button className='ai_star border w-[53px]   py-1.5 bg-transparent shadow-none' onClick={handleAiButton}> <AiStarIcon /></button>
                    </Tooltip>
                </div>
                {
                    aiToggle && (
                        <>
                            <div className='ask_ai fixed right-[90px] bottom-[74px] z-10'>
                                <div className='relative '>
                                    <div className='absolute top-[9px] left-3 star_icon'>
                                        <Star />
                                    </div>
                                    <input type="text" placeholder='Ask AI to edit or generate...' className="placeholder:text-[11px] text-AiInput-color
                                     py-2 rounded-[20px] w-[250px] ps-8 border-2 text-[11px] border-InputBorder-color  focus:outline-none border-gradient"  />
                                    <div className='absolute top-[11px] right-3.5 send_icon'>
                                        <Send />
                                    </div>

                                </div>
                            </div>
                        </>
                    )


                }
                <div className='add_new_page_button text-center py-[18px] relative w-[50%]  m-auto '>
                    <button className=' w-[100%] m-auto  flex gap-5 justify-center  border border-[#E7E8E9] bg-white py-2 text-grey-color text-[11px] rounded-[10px]'>Add new page <span>+</span></button>



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
            <div className='page_width bg-white rounded-br-[15px] absolute bottom-0 w-[100%]'>
                <div className='flex justify-end items-center gap-[7px] py-[12px] px-[40px] '>
                    <Typography className='text-[8px]'>Page 1/1</Typography>
                    <input
                        type="range"
                        className="progress"
                        min="0"
                        max="100"
                        step="1"
                    />
                    <div className='width_per'>
                        <Typography className='text-[8px]'>50%</Typography>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home