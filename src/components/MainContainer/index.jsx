import React, { useContext, useState } from "react";
import { EditorContext } from "../../contexts/EditorContext";
import { StyledContainer } from "./styles";

export function MainContainer({
  handleSelect,
  containerName,
  children,
  ...props
}) {
  const { containers, setContainers } = useContext(EditorContext);
  const container = containers[containerName];

  function handleSave(updatedProperties) {
    setContainers({
      ...containers,
      [containerName]: { ...container, ...updatedProperties },
    });
    handleSelect(containerName);
  }

  return (
    <StyledContainer onClick={handleSave} {...container} {...props}>
      {children}
    </StyledContainer>
  );
}
