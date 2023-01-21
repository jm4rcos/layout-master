import React, { useState, useEffect } from "react";
import { StyledContainer } from "./styles";
import { ContainerEditor } from "../ContainerEditor";

export function Container({
  height,
  width,
  bgColor,
  maxHeight,
  maxWidth,
  Radius,
  children,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    function handleMouseEnter() {
      document.querySelector(".container").classList.add("hovered");
      setIsHovered(true);
    }
    function handleMouseLeave() {
      document.querySelector(".container").classList.remove("hovered");
      setIsHovered(false);
    }
    const element = document.querySelector(".container");
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleSave(newProps) {
    // aqui você pode usar setState ou outra forma para atualizar as propriedades do componente com os novos valores
  }

  return (
    <StyledContainer
      className="container"
      height={height}
      width={width}
      bgColor={bgColor}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      Radius={Radius}
    >
      {children}
      <button onClick={handleEditClick}>Edit</button>
      {isHovered && <ContainerEditor onSave={handleSave} />}
    </StyledContainer>
  );
}
