function ProfileItem(props) {
  return (
    <div className={`w-[108px] `}>
      <h2 className="text-center text-[14px] opacity-70 w-[74px] mx-auto">
        {props.title}
      </h2>
      <div className="size-[99px]  bg-[#EDF0F5] flex items-center justify-center mx-auto text-6xl font-bold rounded-lg">
        {props.number}
      </div>
    </div>
  );
}

export default ProfileItem;
