import styled, { css } from "styled-components";
import { themes } from "../../themes/themes";

export const StyledEditor = styled.div`

  display: flex;
  flex-direction: column;
  background-color: ${themes.dark.colors.dark500};
  max-width: 350px;
  width: 300px;
  gap: 10px;
  /* padding: 18px; */
  border-radius: 10px;
  height: 400;
`
    

export const EditorPanel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${themes.dark.colors.dark500};
  max-width: 300px;
  /* width: 100%; */
  gap: 10px;
  padding: 18px;
  border-radius: 10px;
`;

export const IconContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  padding-inline: 8px;
  height: 40px;
  width: 40px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.color ? props.color : themes.dark.colors.dark500};
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