import React, { useEffect, useState } from "react";
import { themes } from "../themes/themes";

export const EditorContext = React.createContext();

export function EditorProvider({ children }) {
  const [containers, setContainers] = useState({
    mainContainer: {
      color: themes.dark.colors.dark300,
      justify: "center",
      align: "center",
      cantSize: true,
      zIndex: 10,
      cantSize: true,
    },
    loginContainer: {
      color: themes.light.colors.light500,
      justify: "center",
      align: "center",
      width: "450px",
      height: "400px",
      zIndex: 100,
    },
    test: {
      color: themes.light.colors.success,
      justify: "center",
      align: "center",
      width: "250px",
      height: "200px",
      zIndex: 1000,
    },
  });

  return (
    <EditorContext.Provider
      value={{
        containers,
        setContainers,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}
