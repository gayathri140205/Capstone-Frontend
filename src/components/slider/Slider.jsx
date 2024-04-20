/* eslint-disable no-unused-vars */


// eslint-disable-next-line no-unused-vars
import React from "react";
import useLogout from "../hooks/useLogout";
import { useEffect, useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
// import { FaTicketAlt, FaTasks, FaUser, FaCog } from "react-icons/fa";

import { TbLogout2 } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Slider = () => {
  let userData = JSON.parse(sessionStorage.getItem("userData"));
  let [role, setRole] = useState("");
  let logout = useLogout();

  useEffect(() => {
    if (!userData) {
      logout();
    } else {
      setRole(userData.role);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="rgba(255, 255, 255, 0.2)">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="#"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            <FaUserCircle style={{ height: "50px", width: "40px" }} />
            {` ${userData.name}  `}
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            {role === "customer" ? <CustomerNavLinks /> : <UserNavLinks />}
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px", cursor:"pointer"
            }}
            onClick={logout}
          >
            <TbLogout2 /> Logout
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

function CustomerNavLinks() {
  let logout = useLogout();
  return (
    <>
      <NavLink exact="true" to="/dashboard" activeclassname="activeClicked">
        <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
      </NavLink>
    </>
  );
}

function UserNavLinks() {
  let logout = useLogout();
  return (
    <>
      <NavLink exact="true" to="/userdash" activeclassname="activeClicked">
        <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
      </NavLink>
      <NavLink exact="true" to="/createTask" activeclassname="activeClicked">
        <CDBSidebarMenuItem icon="file">Create Task</CDBSidebarMenuItem>
      </NavLink>
    </>
  );
}

          
     
   
   
export default Slider;