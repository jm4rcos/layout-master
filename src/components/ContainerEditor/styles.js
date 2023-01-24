import styled, { css } from "styled-components";
import { themes } from "../../themes/themes";

export const StyledEditor = styled.div`

    position: absolute;
    top: 0;
    ${(props) => props.containerName === 'mainContainer' && css`right: 0;`}
    ${(props) => props.containerAlign === 'flex-start' && (props.containerName !== 'mainContainer' && css`left: 0;`) }
    ${(props) => props.containerAlign === 'flex-end' && (props.containerName !== 'mainContainer' && css`right: 0;`) }
    ${(props) => props.containerAlign === 'center' && (props.containerName !== 'mainContainer' && css`right: 0;`) }
    z-index: 99999999;
    margin: 10px;

    ${(props) => props.isOpen && css`background-color: ${themes.dark.colors.active};`}`;
    

export const EditorPanel = styled.div`
  display: flex;
  background-color: ${themes.dark.colors.dark500};
  width: auto;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
`;

export const IconContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  padding-inline: 8px;
  height: 40px;
  border-radius: 5px;
  background-color: ${themes.dark.colors.dark100};
  cursor: pointer;
  outline: none;
  border: none;
`;

export const EditDiv = styled.div`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${themes.dark.colors.dark500};
  border-radius: 10px;
  transition: all 0.2s ease-in;

  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  margin: 10px;
`;