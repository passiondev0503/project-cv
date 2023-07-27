import React from 'react';
import "./style.css";
import {
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
const DesignSectionTabs = () => {
  return (
    <div className="design_tabs">
    <Tabs value={1} orientation="horizontal" className="">
      <TabsHeader className=" pe-0 bg-transparent flex justify-between	">
        <Tab key={1} value={1} className="place-items-start text-[14px] text-white font-medium	" >
          Templates
        </Tab>
        <Tab key={2} value={2} className="place-items-start text-[14px] text-white font-medium	 " >
          Styles
        </Tab>
      </TabsHeader>
    </Tabs>
  </div>
  )
}

export default DesignSectionTabs;