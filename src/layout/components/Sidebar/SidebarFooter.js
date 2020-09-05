import React from "react";
import { FaGithub } from "react-icons/fa";
export const SidebarFooter = () => {
  return (
    <div
      className="sidebar-btn-wrapper"
      style={
        ({
          padding: "20px 24px",
        },
        { textAlign: "center" })
      }
    >
      <a
        href="https://github.com/azouaoui-med/react-pro-sidebar"
        target="_blank"
        className="sidebar-btn"
        rel="noopener noreferrer"
      >
        <FaGithub />
        <span> github</span>
      </a>
    </div>
  );
};
