import React, { useContext } from "react";
import { Button } from "reactstrap";
import UseAnimations from "react-useanimations";
import menu3 from "react-useanimations/lib/menu3";
import { MasterContext } from "../../../context/MasterContext";

export const SidebarHeader = () => {
  const { master, toggleSidebar } = useContext(MasterContext);
  return (
    <div className="sidebar-header">
      {/* <div className="sidebar-brand">Minh's Dashboard</div> */}
      <div role="button">
        <UseAnimations
          reverse={!master.sidebar.collapsed}
          onClick={toggleSidebar}
          size={40}
          wrapperStyle={{ marginTop: "5px" }}
          animation={menu3}
          strokeColor="purple"
        />
        {/* <span>Minh's Dashboard</span> */}
      </div>
      {/* <Button onClick={toggleSidebar}>Toggle Sidebar</Button> */}
    </div>
  );
};
