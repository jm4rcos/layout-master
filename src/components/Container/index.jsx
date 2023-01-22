import React, { useState, useEffect } from "react";
import { StyledContainer } from "./styles";
import { ContainerEditor } from "../ContainerEditor";

export function Container({
  height,
  width,
  initialColor,
  border,
  shadow,
  blur,
  radius,
  children,
  padding,
  initialAlign
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [color, setColor] = useState(initialColor)
  const [align, setAlign] = useState(initialAlign)

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

  function handleSave({ color, align }) {
    setAlign(align)
    setColor(color)
    console.log("propriedades: ", color, align);
    // aqui você pode usar setState ou outra forma para atualizar as propriedades do componente com os novos valores
  }

  return (
    <StyledContainer
      className="container"
      height={height}
      width={width}
      color={color}
      radius={radius}
      blur={blur}
      shadow={shadow}
      border={border}
      padding={padding}
      align={align}
    >
      {children}
      {
        isHovered && <ContainerEditor onSave={handleSave} />}
    </StyledContainer>  
  );
}
