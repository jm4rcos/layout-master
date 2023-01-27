import styled from "styled-components";

export const StyledContainer = styled.div.attrs((props) => ({
  style: {
    height: props.height,
    width: props.width,
    backgroundColor: props.color,
    borderRadius: props.radius,
    padding: props.padding,
    justifyContent: props.justify,
    alignItems: props.align
  },
}))`
  display: flex;
  position: relative;
  min-height: 100px;
  min-height: 100px;

  box-sizing: border-box;

  &.hovered {
    border: solid 2px lightgreen;
    transition: all 0.1s ease-in-out;
  }
`;