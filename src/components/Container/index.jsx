import React from "react";
import { StyledContainer } from "./styles";

export function Container({ containerName, children, ...props }) {
  console.log(containerName, props);
  return (
    <StyledContainer containerName={containerName} {...props}>
      {children}
    </StyledContainer>
  );
}
