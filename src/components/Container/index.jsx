import React from "react";
import { MainContainer } from "../MainContainer";

export function Container({ containerName, children, ...props }) {
  return (
    <MainContainer containerName={containerName} {...props}>
      {children}
    </MainContainer>
  );
}
