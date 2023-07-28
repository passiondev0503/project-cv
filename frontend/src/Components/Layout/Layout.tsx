import React, {TouchEvent , useRef, useState } from 'react'
import Header from '../GlobalComponents/Header/Header'
import SideBarTab from '../SideBarTab/SideBarTab'
import BottomTabs from '../BottomTabs/BottomTabs'
import { useLocation } from "react-router-dom"
import DraggableHOC from '../GlobalComponents/DraggableArea/DraggableArea'

const Layout = ({ children }:any) => {
  const location = useLocation(); // Get the current location
  const isAccessTokenPath = location.pathname.includes('/access_token/');
  const isProfileRoute = location.pathname.includes('/profile');
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
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const handleTouchStart = (e:TouchEvent<HTMLButtonElement>) => {
    draggingRef.current = true;
  };

  const handleTouchEnd = () => {
    draggingRef.current = false;
  };

  const handleTouchMove= (e: TouchEvent<HTMLDivElement>) => {
    if (draggingRef.current) {
      const containerHeight = containerRef && containerRef?.current && containerRef?.current.clientHeight;
      if (containerHeight) {
        const touchY = e.touches[0].clientY;
        const newSplitPosition = (touchY / containerHeight) * 100;

        if (newSplitPosition >= 30 && newSplitPosition <= 85) {
          setSplitPosition(newSplitPosition);
        } else if (newSplitPosition > 85) {
          setSideBarOptions(false);
          setSplitPosition(30);
        }
      }

    }
  };

  

  return (
    <>
    <DraggableHOC>
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
          {!isProfileRoute && <BottomTabs
            sideBarOptions={sideBarOptions}
            aiToggle={aiToggle}
            sideOptionHandle={sideOptionHandle}
            handleAiButton={handleAiButton}
          />

          }
        </div>
      </div>
      </DraggableHOC>
    </>
  )
}

export default Layout