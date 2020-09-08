import React, { Fragment, useContext } from "react";
// import { A } from "hookrouter";
import { FaGem, FaHeart } from "react-icons/fa";
import { ProSidebar, SidebarContent, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useLocation, useRouteMatch } from "react-router-dom";
import { SidebarHeader } from "./Sidebar/SidebarHeader";
import { SidebarFooter } from "./Sidebar/SidebarFooter";
import { MasterContext } from "../../contexts/MasterContext";

export const LeftSidebar = () => {
  const { master, changeHeaderTitle } = useContext(MasterContext);
  const collapsed = master.sidebar.collapsed;
  // let match = useRouteMatch();
  return (
    <Fragment>
      <ProSidebar collapsed={collapsed}>
        <SidebarHeader />
        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<FaGem />}
              onClick={() => {
                changeHeaderTitle("My Dashboard");
              }}
            >
              {/* {`${match.url}/MyDashboard`} */}
              <Link to="/MyDashboard">Dashboard</Link>
            </MenuItem>

            <SubMenu title="My Workspace" icon={<FaHeart />}>
              <MenuItem
                onClick={() => {
                  changeHeaderTitle("COVID-19 Tracker");
                }}
              >
                {/* {`${match.url}/PomodoroApp`} */}
                <Link to="/CovidTrackerApp">COVID-19 Tracker App</Link>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  changeHeaderTitle("Pomodoro App");
                }}
              >
                {/* {`${match.url}/PomodoroApp`} */}
                <Link to="/PomodoroApp">PomodoroApp</Link>
              </MenuItem>

              <MenuItem>
                <Link to="/YoutubeApp">YoutubeApp</Link>
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        {/* <SidebarFooter /> */}
      </ProSidebar>
    </Fragment>
  );
};
