import React from "react";
import { ListItem, ListItemPrefix } from "@material-tailwind/react";

function SidebarItem({ name, IconComponent, checked }) {
  return (
    <ListItem className="group focus:bg-[#EEE7F6] w-[216px] text-[16.5px] h-[38px] relative focus:text-[#72649D]">
      <ListItemPrefix>
        <img src={IconComponent} alt={name} className="h-6 w-6" />
      </ListItemPrefix>
      <span className="ml-1 transition-opacity duration-300 opacity-100 group-hover:opacity-100 font-bold text-[16.5px]">
        {name}
      </span>
      {checked == "1" ? (
        <div className="absolute right-[10px] size-4 bg-[#FACF52] rounded-2xl" />
      ) : (
        " "
      )}
    </ListItem>
  );
}

export default SidebarItem;
