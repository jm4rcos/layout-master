import React, { useState } from 'react';
import { themes } from "../themes/themes";

export const EditorContext = React.createContext();

export function EditorProvider({ children }) {
  const [containers, setContainers] = useState([{
      id: "mainContainer",
      color: themes.dark.colors.dark300,
      justify: "center",
      align: "center",
      height: 600,
      width: 800,
      children: [{
        id: "loginContainer",
        color: themes.light.colors.light500,
        justify: "center",
        align: "center",
        width: 450,
        height: 400,
        children: [{
          id: "test",
          color: themes.light.colors.success,
          justify: "center",
          align: "center",
          width: 250,
          height: 200,
        }]
      }]
    }]);

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
