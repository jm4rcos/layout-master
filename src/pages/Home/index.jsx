import React from "react";
import { Container } from "../../components/Container";
import { EditorProvider } from "../../contexts/EditorContext";

export function Home() {
    return (
        <EditorProvider>
            <Container
                height="100vh"
                width="100%"
                padding="16px"
            />
        </EditorProvider>
    )
}
