import styled, { css } from "styled-components";
import { themes } from "../../themes/themes";

export const StyledContainer = styled.div`
  height: ${(props) => props.height || "50px"};
  width: ${(props) => props.width || "100px"};
  background-color: ${(props) => props.color || themes.dark.colors.background};
  border-radius: ${(props) => props.radius || "0px"};
  padding: ${(props) => props.padding || "0px"};
  justify-content: ${(props) => props.align || "center"};

  display: flex;
  position: relative;
  box-sizing: border-box;

  &.hovered {
    border: solid 2px lightgreen;
    transition: all 0.1s ease-in-out;
  }
`;

StyledContainer.defaultProps = {
  height: "50px", maxHeight: "50px",
  width: "100px", maxWidth: "100px"
};

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`