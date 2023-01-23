import styled, { css } from "styled-components";
import { themes } from "../../themes/themes";

export const StyledEditor = styled.div`
    position: absolute;
    right: 0;
    margin-right: 10px;
    padding: 10px 10px;
    border-radius: 10px;
    display: flex;
    ${(props) => props.isOpen && css`background-color: ${themes.dark.colors.dark500};`}`;
    

export const EditorPanel = styled.div`
    display: flex;
    background-color: ${themes.dark.colors.dark500};
    width: auto;
    gap: 10px;
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    padding-inline: 8px;
    height: 40px;
    border-radius: 5px;
    background-color: ${ themes.dark.colors.dark100 };
`;

export const EditDiv = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${themes.dark.colors.dark500};
    border-radius: 10px;
`;