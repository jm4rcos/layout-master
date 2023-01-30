import React, { useContext, useState } from "react";
import { EditorContext } from "../../contexts/EditorContext";
import { StyledHome } from "./styles";
import { Container } from "../../components/Container";
import { SidebarEditor } from "../../components/SidebarEditor";
import { themes } from "../../themes/themes";

export function Home() {
  const { containers } = useContext(EditorContext);
  const [selectedContainer, setSelectedContainer] = useState(null);
  
  const handleSelect = (containerId) => {
    const selectedIndex = containers.findIndex(c => c.id === containerId);
    setSelectedContainer(selectedIndex);
  };

  const selected = selectedContainer !== null ? containers[selectedContainer] : {};
  const { name } = selected;
  const [newName, setNewName] = useState("");

  return (
    <StyledHome>
      {containers.map((container, index) => (
        <Container
          key={container.id}
          handleSelect={() => handleSelect(container.id)}
          padding="16px"
          color={themes.dark.colors.dark300}
          name={newName || name || "mainContainer"}
          selected={selectedContainer === index}
          {...container}
        >
          {Array.isArray(container.children) && container.children.map((childContainer, index) => (
            <Container
              key={childContainer.id}
              handleSelect={() => handleSelect(childContainer.id)}
              padding="16px"
              color={themes.light.colors.light500}
              name={newName || childContainer.name}
              selected={selectedContainer === index}
              //{...childContainer}
            />
          ))}
        </Container>
      ))}
      <SidebarEditor
        container={selected}
        handleSelect={handleSelect}
        setNewName={setNewName}
      />
    </StyledHome>
  );

  
}
