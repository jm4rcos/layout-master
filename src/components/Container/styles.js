import styled from "styled-components";

export const StyledContainer = styled.div.attrs((props) => ({
  style: {
    height: props.height,
    width: props.width,
    backgroundColor: props.color,
    borderRadius: props.radius,
    padding: props.padding,
    justifyContent: props.align,
    alignItems: props.justify,
    zIndex: props.zIndex
  },
}))`
  display: flex;
  position: relative;
  box-sizing: border-box;
  min-height: 100px;
  min-height: 100px;

  &.hovered {
    border: solid 2px lightgreen;
    transition: all 0.1s ease-in-out;
  }
`;


export const Wrapper = styled.div`
  display: flex;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditorContent = styled.div `
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;