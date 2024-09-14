import React from "react";
import Siderbar from "../nav-side/Sidebar.jsx";
import Navbar from "../nav-side/Navbar.jsx";
import Card from "./Card.jsx";
function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="flex">
        <div>
          <Siderbar />
        </div>
        <div className=" w-full m-6 mx-6 bg-[#EDF0F5] flex">
          {/* right section of dashboard */}
          <div className="w-[44%]">
            <div className="w-full mt-[227px] px-10">
              <div className="w-[445px] h-[128px] text-[#00003B] text-[40px] leading-[48px] font-normal capitalize custom-font">
                How to get your
                <span className="text-6xl block">dream job easy</span>
              </div>
              <div className="text-[16.5px] leading-5 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Nulla facilisi etiam dignissim diam quis enim lobortis{" "}
              </div>
              <div className="">
                <div className=" w-[247px] py-4 bg-[#FEF8E0] shadow-md rounded-[6px] text-center mt-11 text-[#F9C325] text-[22px] ">
                  Lorem ipsum
                </div>
              </div>
            </div>
          </div>
          {/* right section of dashboard end */}
          {/* left section of dashboard */}
          <div className="w-[56%] flex flex-wrap my-[75px] h-fit ">
            <Card
              index="1"
              title="Lorem ipsum"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              checked="1"
            />
            <Card
              index="2"
              title="Lorem ipsum"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              checked="0"
            />
            <Card
              index="3"
              title="Lorem ipsum"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              checked="1"
            />
            <Card
              index="4"
              title="Lorem ipsum"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              checked="1"
            />
            <Card
              index="5"
              title="Lorem ipsum"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              checked="0"
            />
            <Card
              index="6"
              title="Lorem ipsum"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              checked="0"
            />
          </div>
          {/* left section of dashboard  end*/}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
