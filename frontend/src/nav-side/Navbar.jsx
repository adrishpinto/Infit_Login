import language from "../assets/language.svg";
import bell from "../assets/bell.svg";
import chrome from "../assets/chrome.svg";
function Navbar() {
  return (
    <>
      <div className="flex flex-row h-[81px] items-center justify-between  pl-5 w-full pr-10 ">
        <div className="flex items-center">
          <div className="size-[34px] bg-[#959595]"> </div>
          <div className=" w-[97px] h-[26px] bg-[#95959599] ml-4 "></div>
        </div>

        <div className="align items-center flex space-x-4">
          <div className="bg-[#E3F2FF] size-10 flex items-center justify-center rounded-lg">
            <img src={language} />
          </div>
          <div className="bg-[#EAE8F2] size-10 flex items-center justify-center rounded-lg relative">
            <img src={bell} />
            <div className="absolute size-4 bg-[#FACF52] rounded-xl right-[-7px] top-[-7px]"></div>
          </div>

          <div className="size-[34px] bg-[#959595] ml-14 relative">
            <img
              src={chrome}
              className="bottom-[-5px] right-[-5px] absolute "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
