import React from 'react'
import PlusIcon from '../../assets/Svg/MobileViewSvg/Plusicon'
import AirStarMobileIcon from '../../assets/Svg/MobileViewSvg/AirStarMobileIcon'
import WindowIcon from '../../assets/Svg/MobileViewSvg/WindowIcon';
import "../../Pages/Home/home.css"

const BottomTabs = ({sideBarOptions, aiToggle , sideOptionHandle , handleAiButton}) => {
  return (
    <> <div className={aiToggle ? "hidden" : 'mobile_view_bottom_buttons absolute bottom-0 w-[100%] '}>
    {!sideBarOptions && <nav className='flex justify-between p-[15px]'>
        <div onClick={sideOptionHandle} className='shadow drop-shadow-[0_4px_10px_#9B7EDB4D] tabs-btn bg-pruple-color p-[18px] rounded-xl border-2 border-pruple-color w-[55px] h-[55px] flex justify-center items-center'>
            <PlusIcon />
        </div>
        <div className='tabs-btn w-[55px] h-[55px]  p-[18px] rounded-xl  ai_star_mobile flex justify-center items-center' onClick={handleAiButton}>
            <AirStarMobileIcon />
        </div>

        <div className='shadow drop-shadow-[0_4px_10px_#9B7EDB4D] flex justify-center items-center tabs-btn border-2 border-pruple-color p-[18px] rounded-xl w-[55px] h-[55px]'>
            <WindowIcon />
        </div>
    </nav>}
</div></>
  )
}

export default BottomTabs