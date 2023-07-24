import React, { useState } from "react";
import "./style.css";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
  Tooltip
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import Search from "../../assets/Svg/HomePageSvg/Search";
import RightArrow from "../../assets/Svg/HomePageSvg/RightArrow";
import DesignIcon from "../../assets/Svg/HomePageSvg/DesignIcon";
import ElementIcon from "../../assets/Svg/HomePageSvg/ElementIcon";
import TextIcon from "../../assets/Svg/HomePageSvg/TextIcon";
import UploadTabIcon from "../../assets/Svg/HomePageSvg/UploadTabIcon";
import HistoryTabIcon from "../../assets/Svg/HomePageSvg/HistoryTabIcon";
import DesignSectionTabs from "./DesignSectionTabs";

export default function SideBarTab({ toggleProp, sideBarOption, onTouchStart, splitPosition }) {
  const [siderTogle, setSiderTogle] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const activeTabHandler = () => {
    setSiderTogle(true)
    toggleProp(true)
  }
  const hideHandle = () => {
    setSiderTogle(false)
    toggleProp(false)
  }

  return (
    <Tabs TabIndicatorProps={{
      style: { display: 'none' }
    }} value={activeTab} orientation="vertical" className={!sideBarOption ? " overflow-visible sidebar-tabs" : " overflow-visible sidebar-tabs-visible"}>
      <TabsHeader className="w-[72px] pe-0 bg-transparent pt-0 ps-2 sidebar_tabs">


        <Tab key={1} value={1} className={`place-items-start py-3 ${activeTab === 1 ? "active-tab" : ""}`} onClick={() => { activeTabHandler(); setActiveTab(1) }} >
          <div className="">
            <DesignIcon />
            <Typography className="text-[10px] text-grey-color">Design</Typography>

          </div>
        </Tab>
        <Tab key={2} value={2} className={`place-items-start py-3 ${activeTab === 2 ? "active-tab" : ""}`} onClick={() => { activeTabHandler(); setActiveTab(2) }} >
          <div className="text-center">
            <ElementIcon className='m-auto' />
            <Typography className="text-[10px] text-grey-color">Element</Typography>

          </div>
        </Tab>
        <Tab key={3} value={3} className={`place-items-start py-3 ${activeTab === 3 ? "active-tab" : ""}`} onClick={() => { activeTabHandler(); setActiveTab(3) }}  >
          <div className="">
            <TextIcon className='m-auto' />
            <Typography className="text-[10px] text-grey-color">History</Typography>

          </div>
        </Tab>
        <Tab key={4} value={4} className={`place-items-start py-3 ${activeTab === 4 ? "active-tab" : ""}`} onClick={() => { activeTabHandler(); setActiveTab(4) }}  >
          <div className="uploadtab">
            <UploadTabIcon className='m-auto' />
            <Typography className="text-[10px] text-grey-color">Uploads</Typography>

          </div>
        </Tab>
        <Tab key={5} value={5} className={`place-items-start py-3 ${activeTab === 5 ? "active-tab" : ""}`} onClick={() => { activeTabHandler(); setActiveTab(5) }}  >
          <div className="">
            <HistoryTabIcon className='m-auto' />
            <Typography className="text-[10px] text-grey-color">History</Typography>

          </div>
        </Tab>

      </TabsHeader>
      {
        siderTogle && (
          <>
            <TabsBody style={{ height: `${100 - splitPosition}%` }} className={`py-3.5 px-6 bg-light-black relative overflow-visible  w-[350px] tab_content rounded-bl-[15px]`}
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}

            >
              <button onTouchStart={onTouchStart} className="scroll"></button>
              <TabPanel key={1} value={1} className="py-0">
                <div className="search-input relative">
                  <Input
                    type="search"
                    placeholder="Search"
                    className="focus:!border-light-grey rounded-[10px]  !border !border-light-grey bg-white placeholder:text-xs"
                    labelProps={{
                      className: "hidden"
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                  <div className="search-icon absolute bottom-3.5 right-5">
                    <Search />
                  </div>
                </div>
                <DesignSectionTabs />

              </TabPanel>
              <TabPanel key={2} value={2} className="py-0">

                <div className="w-72">
                  <Typography>focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500</Typography>
                </div>

              </TabPanel>
              <TabPanel key={3} value={3} className="py-0">

                <div className="w-72">
                  <Typography>

                    fsdggadsgfdsagfyd
                    cbc
                  </Typography>
                </div>

              </TabPanel>
              <div className="sidebar-close-btn absolute right-[-16px] top-[50%] translate-y-[-50%] z-10">
                <Tooltip content="Hide" placement="right" className="right_arrow_tootltip_content">
                  <button onClick={hideHandle}><RightArrow /> </button>
                </Tooltip>
              </div>

            </TabsBody ></>
        )
      }

    </ Tabs >
  );
}