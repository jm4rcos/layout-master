import styled from "styled-components";

export const StyledContainer = styled.div.attrs((props) => ({
  style: {
    height: props.height,
    width: props.width,
    backgroundColor: props.color,
    borderRadius: props.radius,
    padding: props.padding,
    justifyContent: props.align,
  },
}))`
  display: flex;
  align-items: center;
  position: relative;
  min-height: 100px;
  min-height: 100px;

  box-sizing: border-box;

  &.hovered {
    border: solid 2px lightgreen;
    transition: all 0.1s ease-in-out;
  }
`;


export const Wrapper = styled.div`
  /* position: relative;
  display: flex;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center; */
`