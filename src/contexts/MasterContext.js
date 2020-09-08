import React, { createContext, useState } from "react";

export const MasterContext = createContext();

const MasterContextProvider = (props) => {
  const [master, setMaster] = useState({
    info: {
      name: "Minh Phan",
      title: "Software Engineer",
      description: "UW New Grad",
    },
    theme: {
      isLightTheme: true,
    },
    sidebar: {
      collapsed: true,
      light: "#ffffff",
      dark: "#000000",
    },
    header: {
      title: "My Dashboard",
    },
  });
  const changeHeaderTitle = (newTitle) => {
    setMaster((master) => ({
      ...master,
      header: {
        ...master.header,
        title: newTitle,
      },
    }));
  };
  const toggleTheme = () => {
    setMaster((master) => ({
      ...master,
      theme: {
        ...master.theme,
        isLightTheme: !master.theme.isLightTheme,
      },
    }));
  };

  const toggleSidebar = () => {
    setMaster((master) => ({
      ...master,
      sidebar: {
        ...master.sidebar,
        collapsed: !master.sidebar.collapsed,
      },
    }));
  };

  return (
    <MasterContext.Provider value={{ master, toggleTheme, toggleSidebar, changeHeaderTitle }}>
      {props.children}
    </MasterContext.Provider>
  );
};

export default MasterContextProvider;
