import React from "react";
import Siderbar from "../nav-side/Sidebar.jsx";
import Navbar from "../nav-side/Navbar.jsx";
import Card from "../dashboard/Card.jsx";
import JobItem from "./JobCard.jsx";
import ProfileItem from "./ProfileItem.jsx";
import JobCard from "./JobCard.jsx";
import notificationProfile from "../assets/notification-profile.svg";
import yellow_exclamation from "../assets/yellow_exclamation.svg";
import NotificationItem from "./NotifcationItem.jsx";
import MessageItem from "./MessageItem.jsx";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="flex">
        <div>
          <Siderbar />
        </div>
        <div className=" w-full m-6 mx-6 bg-[#EDF0F5] pt-[33px] px-[26px]">
          <h1 className="pl-[30px] text-6xl">Welcome Olivia!</h1>
          <div className=" w-full h-[54px] bg-[#FFF5CC] flex items-center pl-3 my-5 mb-10 rounded-lg">
            <img src={yellow_exclamation}></img>
            <p className="text-[#FCBC00] pl-4">you have an assignment due</p>
          </div>
          <div className="flex space-x-10">
            <div className="w-[536px] bg-[#FFFFFF] rounded-[18px] py-5 px-6">
              <h2 className="text-[22px]  font-">Profile Statistics</h2>
              <div className="flex space-x-7 ">
                <ProfileItem title="Application in Progress" number="56" />
                <ProfileItem title="Interviews Done" number="56" />
                <ProfileItem title="Jobs Applied" number="56" />
                <ProfileItem title="Assignments Done" number="56" />
              </div>
            </div>

            <div className="w-[536px] bg-[#FFFFFF] rounded-[18px] py-5 px-6">
              <h2 className="text-[22px]  font-">Job Trends</h2>
              {/* Job-Trends Card */}
              <div className="flex space-x-8">
                <JobCard />

                <div className="bg-[#EDF0F5] w-[135.88px] h-[142.35px] rounded-[8.7px] p-2"></div>
                <div className="bg-[#EDF0F5] w-[135.88px] h-[142.35px] rounded-[8.7px] p-2"></div>
              </div>
              {/* Job trends card end */}
            </div>
          </div>
          {/* message + notification section */}
          <div className="flex space-x-5 mt-4">
            {/* notification card */}
            <div className="my-4 w-[328px] h-[459px] bg-white rounded-[18px]  py-5">
              <div className="flex items-center px-6">
                <h2 className=" text-[22px]">Notifications</h2>
                <div className="size-[5px] bg-[#1D89E4] rounded-sm mx-1"></div>
                <div className="text-[18px] opacity-55">Linkedin</div>
              </div>
              {/* Notification Items */}
              <div className="px-[10px] space-y-3 mt-2">
                <NotificationItem
                  img={notificationProfile}
                  name="Name"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...."
                  bg="#CAD0D9"
                />
                <NotificationItem
                  img={notificationProfile}
                  name="Company Names...."
                  content="Lorem ipsum dolor sit amet, consectetur,"
                  bg="#EDF0F5"
                  job="1"
                />
              </div>
            </div>
            {/* notifcation card end */}
            {/* Messages card*/}
            <div className="my-4 w-[348px] h-[459px] bg-white rounded-[18px]  py-5">
              <div className="flex items-center px-6">
                <h2 className=" text-[22px]">Message</h2>
                <div className="size-[5px] bg-[#1D89E4] rounded-sm mx-1"></div>
                <div className="text-[18px] opacity-55">Linkedin</div>
              </div>
              {/* Messages Items */}
              <div className="px-[10px] space-y-3 mt-2">
                <MessageItem
                  img={notificationProfile}
                  name="Name"
                  content="Lorem ipsum dolor sit amet, consectetur,"
                  bg="#EDF0F5"
                  posted="20 secs ago"
                />
                <MessageItem
                  img={notificationProfile}
                  name="Name"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing "
                  bg="#CAD0D9"
                  posted="20 secs ago"
                />
              </div>
            </div>
            {/* messages card end */}
          </div>
          {/* notification + message section end */}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
