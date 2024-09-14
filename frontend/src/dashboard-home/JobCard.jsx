import jobItem from "../assets/job-item.svg";
function JobCard() {
  return (
    <div className="bg-[#EDF0F5] w-[135.88px] h-[142.35px] rounded-[8.7px] p-2">
      <div className="flex  ">
        {/* profile pic */}
        <img src={jobItem} />

        <div className="flex flex-col ml-1">
          <div className="text-[16px]">Company</div>
          <div className="flex items-center">
            <div className="block text-[12px] leading-[8px]">Role</div>
            <div className="flex items-center">
              <div className="size-[5px] bg-[#1D89E4] rounded-sm mx-1"></div>
              <div className="text-[#000000B2] text-[9px]">remote</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF5CC] w-[101px] h-5 text-[#FFBE00] text-[10px] rounded-[4px] mt-4 flex items-center justify-center">
        posted 3 hours ago
      </div>
      <div className="text-[10px] text-[#1D89E4] w-[78px] h-5 bg-[#b8d8f5] border border-slate-200 rounded-[4px] flex items-center justify-center mt-2">
        Actively hiring
      </div>
    </div>
  );
}

export default JobCard;
