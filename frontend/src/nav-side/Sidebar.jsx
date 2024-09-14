import React from "react";
import { Card, Typography, List } from "@material-tailwind/react";
import home from "../assets/home.svg";
import jobs from "../assets/jobs.svg";
import resume from "../assets/resume.svg";
import emails from "../assets/emails.svg";
import applications from "../assets/applications.svg";
import schedule from "../assets/schedule.svg";
import assignments from "../assets/assignments.svg";
import networks from "../assets/networks.svg";
import documents from "../assets/documents.svg";
import profile from "../assets/profile.svg";
import discover from "../assets/discover.svg";
import help from "../assets/help.svg";
import mask from "../assets/mask.svg";
import SidebarItem from "./SidebarItem";
import settings from "../assets/settings.svg";

export default function Sidebar() {
  return (
    <Card className=" rounded-none transition-width duration-500  w-64 p-2 pl-2 relative shadow-none min-h-full">
      <div className="mb-2 p- flex justify-between items-center"></div>
      <List>
        <div className="flex flex-col space-y-5">
          <div className="space-y-2">
            <SidebarItem name="Home" IconComponent={home} checked="1" />
            <SidebarItem name="Jobs" IconComponent={jobs} />
            <SidebarItem
              name="Resume Builder"
              IconComponent={resume}
              checked="1"
            />
            <SidebarItem name="Emails" IconComponent={emails} checked="1" />
            <SidebarItem name="Applications" IconComponent={applications} />
            <SidebarItem name="Schedule" IconComponent={schedule} />
            <div className="border-b-[3px] opacity-60 my-6 w-200px border-[#DADADA]"></div>
          </div>
          <div className="space-y-2">
            <SidebarItem
              name="Assignments"
              IconComponent={assignments}
              checked="1"
            />
            <SidebarItem name="My Networks" IconComponent={networks} />
            <SidebarItem
              name="Documents"
              IconComponent={documents}
              checked="1"
            />
            <SidebarItem name="My Profile" IconComponent={profile} />
            <div className="border-b-[3px] opacity-60 my-6 w-200px border-[#DADADA]"></div>
          </div>
          <div className="space-y-2">
            <SidebarItem name="Discover" IconComponent={discover} />
            <SidebarItem name="Help" IconComponent={help} />
          </div>
          <div className="absolute bottom-5 left-2 space-y-2">
            <div className="text-center w-[214px] h-[34px] py-2  bg-[#E3F2FF] rounded-[20px] text-[16px] text-[#1D89E4] relative">
              Subscriptions
              <div className="absolute bottom-6 right-2 size-4 bg-[#FACF52] rounded-2xl" />
            </div>
            <div className="text-center flex py-2 w-[214px] h-[57px] rounded-xl bg-[#EEE7F6] items-center justify-around">
              <img src={mask} alt="" className="" />
              Vasudha
              <img src={settings} alt="" className="" />
            </div>
          </div>
        </div>
      </List>
    </Card>
  );
}
