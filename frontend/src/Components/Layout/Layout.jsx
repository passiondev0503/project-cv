import React, { useRef, useState } from 'react'
import Header from '../GlobalComponents/Header/Header'
import SideBarTab from '../SideBarTab/SideBarTab'
import BottomTabs from '../BottomTabs/BottomTabs'
import {useLocation} from "react-router-dom"

const Layout = ({children}) => {
  const location = useLocation(); // Get the current location
  const isAccessTokenPath = location.pathname.includes('/access_token/');
    const [sideBarToggle, setSideBarToggle] = useState(false)
    const [sideBarOptions, setSideBarOptions] = useState(false)
    const [aiToggle, setAiTogle] = useState(false)
  

  
    const sideOptionHandle = () => {
      setSideBarOptions(true)
    }
    const handleAiButton = () => {
      setAiTogle(!aiToggle)
    }
  
  
    const [splitPosition, setSplitPosition] = useState(30);
    const containerRef = useRef(null);
    const draggingRef = useRef(false);
  
    const handleTouchStart = (e) => {
      draggingRef.current = true;
    };
  
    const handleTouchEnd = () => {
      draggingRef.current = false;
    };
  
    const handleTouchMove = (e) => {
      if (draggingRef.current) {
        const containerHeight = containerRef.current.clientHeight;
        const touchY = e.touches[0].clientY;
        const newSplitPosition = (touchY / containerHeight) * 100;
  
        if (newSplitPosition >= 30 && newSplitPosition <= 85) {
          setSplitPosition(newSplitPosition);
        } else if (newSplitPosition > 85) {
          setSideBarOptions(false);
          setSplitPosition(30);
        }
      }
    };
  
  return (
    <>
    {!isAccessTokenPath && <Header />}
          <div className={!sideBarToggle ? "home-wrapper" : "home_wrapper_full"}
            ref={containerRef}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}>
            <div className=" bg-dark-black">
              <SideBarTab toggleProp={setSideBarToggle} sideBarOption={sideBarOptions} onTouchStart={handleTouchStart} splitPosition={splitPosition} />
            </div>
            <div className={` md:h-[${splitPosition}%]` + sideBarToggle ? `bg-home-white-smoke relative w-full rounded-r-[15px]` : "bg-home-white-smoke relative w-full rounded-[15px]"}  >
              {children}
              <BottomTabs
                sideBarOptions={sideBarOptions}
                aiToggle={aiToggle}
                sideOptionHandle={sideOptionHandle}
                handleAiButton={handleAiButton}
              />
            </div>
          </div>
        </>
  )
}

export default Layout