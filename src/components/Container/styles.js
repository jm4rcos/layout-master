import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  height: ${(props) => props.height || "50px"};
  width: ${(props) => props.width || "100px"};
  background-color: ${(props) => props.color || "#fff"};
  max-height: ${(props) => props.maxHeight || "none"};
  max-width: ${(props) => props.maxWidth || "none"};
  border-radius: ${(props) => props.Radius || "0px"};

  &.hovered {
    border: solid 2px red;
    transition: all 0.1s ease-in-out;
    transform: scale(1);
  }
  /* other styles */
`;

StyledContainer.defaultProps = {
  height: "50px",
  width: "100px",
};
