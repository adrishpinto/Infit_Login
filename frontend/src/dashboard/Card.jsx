function Card(props) {
  return (
    <div
      className={`w-[293px] h-[243px] bg-[#FFFFFF] custom-shadow rounded-[12px] relative ${
        props.index % 2 == 0 ? "ml-[30px]" : ""
      } ${props.index >= 3 && "mt-10"}`}
    >
      <div className="mx-4">
        <div className="size-[49px] flex items-center justify-center bg-[#FEF8E0] my-3 rounded-md text-[26px] ">
          {props.index}
        </div>
        <div className="text-[22px] font-bold text-[#72649D]">
          {props.title}
        </div>
        <div className="text-[14px] leading-[16.8px] mt-3">{props.content}</div>
        {props.checked == "1" ? (
          <div className="absolute bottom-3 right-3">
            <div className="size-10 rounded-lg bg-[#E3F2FF]  flex items-center justify-center">
              <div className="bg-[#1D89E4] size-[29px] rounded-lg"></div>
            </div>
          </div>
        ) : (
          <div className="size-10 bg-[#E3F2FF] rounded-lg absolute bottom-3 right-3"></div>
        )}
      </div>
    </div>
  );
}

export default Card;
