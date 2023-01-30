import React, { useContext, useState } from "react";
import { EditorContext } from "../../contexts/EditorContext";
import { StyledContainer } from "./styles";

export function Container({ selected, handleSelect, children, ...props }) {
  const { containers, setContainers } = useContext(EditorContext);

  const handleSave = () => {
    const newContainers = [...containers];
    newContainers[containers.findIndex(c => c.id === props.id)] = {
      ...props,
      children: children && children.length > 0 ? children : []
    };
    setContainers(newContainers);
  };

  return (
    <StyledContainer onClick={selected ? handleSave : () => handleSelect(props.id)} {...props}>
      {children && children.length > 0 ? children.map(child => child) : null}
    </StyledContainer>
  );
}
