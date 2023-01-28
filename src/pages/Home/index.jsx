import React, { useContext, useState } from "react";
import { EditorContext } from "../../contexts/EditorContext";
import { StyledHome } from "./styles";
import { Container } from "../../components/Container";
import { SidebarEditor } from "../../components/SidebarEditor";
import { themes } from "../../themes/themes";

export function Home() {
  const [selectedContainer, setSelectedContainer] = useState(["mainContainer"]);
  const [newName, setNewName] = useState("");
  const { containers } = useContext(EditorContext)

  function handleSelect(containerName) {
    setSelectedContainer(containerName);
    console.log(containerName);
  }

  return (
    <StyledHome>
      <Container
        containerName={newName || "mainContainer"}
        handleSelect={handleSelect}
        height="600px"
        width="800px"
        padding="16px"
        id="mainContainer"
      >
        <Container
          containerName="loginContainer"
          handleSelect={handleSelect}
          id="loginContainer"
        >
        </Container>
      </Container>
      <SidebarEditor
        containerName={selectedContainer}
        handleSelect={handleSelect}
        setNewName={setNewName}
      />
    </StyledHome>
  );
}
