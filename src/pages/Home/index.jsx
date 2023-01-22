import React from "react";
import { Container } from "../../components/Container";
import { themes } from "../../themes/themes";

export function Home(){
    return (
        <Container
            color={themes.dark.colors.background}
            height="100vh"
            width="100%"
            padding="16px"
        />
    )
}