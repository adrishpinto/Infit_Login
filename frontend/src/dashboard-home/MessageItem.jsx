function MessageItem(props) {
  return (
    <div
      className={`h-[75px] w-[318px] bg-[${props.bg}] rounded-[14px] flex items-center px-2 relative border-`}
    >
      <img src={`${props.img}`} />
      <div className="ml-4">
        <div className="flex items-center">
          <div className="text-[16.5px]">{props.name}</div>
          <div className="bg-yellow bottom-2 right-2 text-[#FACF52] rounded-[4px] bg-[#FFF5CC] ml-2 text-[8px] w-[53px] h-4 flex items-center justify-center">
            {props.posted}
          </div>
        </div>
        <div className="text-[12px] opacity-70 leading-[14.4px] w-[213px]">
          {props.content}
        </div>
      </div>
    </div>
  );
}

export default MessageItem;
