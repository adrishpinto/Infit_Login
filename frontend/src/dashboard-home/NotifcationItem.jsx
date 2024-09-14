function NotificationItem(props) {
  return (
    <div
      className={`h-[81px] w-[291px] bg-[${props.bg}] rounded-[14px] flex items-center px-2 relative`}
    >
      <img src={`${props.img}`} />
      <div className={`mt-1 ml-1 ${props.job == 1 ? "mt-[-10px]" : " "} `}>
        <div className={`text-[16.5px] self-start `}>{props.name}</div>
        <div className={`text-[12px] opacity-70 leading-[14.4px]`}>
          {props.content}
        </div>
      </div>
      {props.job == 1 && (
        <div className="bg-yellow absolute bottom-2 right-2 text-[#FFBE00] rounded-[4px] bg-[#FFF5CC] text-[12px] w-[82px] h-5 flex items-center justify-center">
          View Job
        </div>
      )}
    </div>
  );
}

export default NotificationItem;
