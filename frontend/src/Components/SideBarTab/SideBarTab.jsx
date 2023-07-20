import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { Input } from "@material-tailwind/react";

export default function SideBarTab() {

  return (
    <Tabs value="dashboard" orientation="vertical" className="h-100 ">
      <TabsHeader className="w-40 h-100">

        <Tab key={1} value={1} className="place-items-start " >
          <div className="">
            {React.createElement(Square3Stack3DIcon, { className: "m-auto h-5" })}
            <Typography className="text-[10px]">Design</Typography>

          </div>
        </Tab>
        <Tab key={2} value={2} className="place-items-start">
          <div className="">
            {React.createElement(UserCircleIcon, { className: "m-auto h-5" })}
            <Typography className="text-[10px]">Element</Typography>

          </div>
        </Tab>
        <Tab key={3} value={3} className="place-items-start">
          <div className="">
            {React.createElement(Cog6ToothIcon, { className: "m-auto h-5" })}
            <Typography className="text-[10px]">History</Typography>


          </div>
        </Tab>

      </TabsHeader>
      <TabsBody>

        <TabPanel key={1} value={1} className="py-0">
          <div className="w-72">
            <Input
              type="email"
              placeholder="Email Address"
              className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
              labelProps={{
                className: "hidden"
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
          </div>

        </TabPanel>
        <TabPanel key={2} value={2} className="py-0">

          <div className="w-72">
            <Typography>focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500</Typography>
          </div>

        </TabPanel>
        <TabPanel key={3} value={3} className="py-0">

          <div className="w-72">
            <Typography>

              fsdggadsgfdsagfydgfydgfyadgfyadsgfyasdgfyadsgfydsgfadsyg
            </Typography>
          </div>

        </TabPanel>

      </TabsBody>
    </Tabs>
  );
}