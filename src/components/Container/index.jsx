import React, { useContext, useState, useEffect } from 'react';
import { StyledContainer } from "./styles";
import { ContainerEditor } from "../ContainerEditor";
import { EditorContext } from "../../contexts/EditorContext";

export function Container({
  height,
  width,
  border,
  shadow,
  blur,
  radius,
  children,
  padding,
}) {
  const { color, align, setColor, setAlign } = useContext(EditorContext);

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

  useEffect(() => {
    console.log("context changed: ", align, color);
  }, [align, color])

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleSave({ color, align }) {
    setColor(color);
    setAlign(align);
    console.log( color, align );
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
      {isHovered && <ContainerEditor onSave={handleSave} />}
    </StyledContainer>
  );
}
