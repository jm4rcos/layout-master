import React from "react";
import { EditorProvider } from "../../contexts/EditorContext";
import { MainContainer } from "../../components/MainContainer";
import { Container } from "../../components/Container";

export function Home() {
  return (
    <EditorProvider>
      <MainContainer
        containerName="mainContainer"
        cantSize={true}
        height="100vh"
        width="100%"
        padding="16px"
      >
        <Container containerName="loginContainer">
          <Container containerName="test"></Container>
        </Container>
      </MainContainer>
    </EditorProvider>
  );
}
