import styled, { css } from "styled-components";
import { themes } from "../../themes/themes";

export const StyledContainer = styled.div.attrs(props => ({
  style: {
      height: props.height,
      width: props.width,
      backgroundColor: props.color,
      borderRadius: props.radius,
      padding: props.padding,
      justifyContent: props.align
  },
}))`

  display: flex;
  position: relative;
  box-sizing: border-box;

  &.hovered {
    border: solid 2px lightgreen;
    transition: all 0.1s ease-in-out;
  }
`;


export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`