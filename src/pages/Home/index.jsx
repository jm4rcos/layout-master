import React, { useContext, useState } from "react";
import { EditorContext } from "../../contexts/EditorContext";
import { StyledHome } from "./styles";
import { MainContainer } from "../../components/MainContainer";
import { SidebarEditor } from "../../components/SidebarEditor";

export function Home() {
  const [selectedContainer, setSelectedContainer] = useState("mainContainer");
  const [newName, setNewName] = useState("");
  const { containers } = useContext(EditorContext)

  function handleSelect(containerName) {
    setSelectedContainer(containerName);
    console.log(containerName);
  }

  return (
    <StyledHome>
      <MainContainer
        containerName={newName || "mainContainer"}
        handleSelect={handleSelect}
        height="600px"
        width="800px"
        padding="16px"
      >
        <MainContainer
          containerName="loginContainer"
          handleSelect={handleSelect}
        >
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </MainContainer>
      </MainContainer>
      <SidebarEditor
        containerName={selectedContainer}
        handleSelect={handleSelect}
        setNewName={setNewName}
      />
    </StyledHome>
  );
}
