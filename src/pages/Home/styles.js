import styled from "styled-components";
import { themes } from "../../themes/themes";

export const StyledHome = styled.div`
    display: flex;
    width: 100%; height: 100vh;
    background-color: ${themes.dark.colors.background};
    justify-content: space-between;
    align-items: center;
`;