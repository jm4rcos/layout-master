import styled from "styled-components";
import { themes } from "../../themes/themes";

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  background-color: ${(props) =>
    props.color ? props.color : themes.dark.colors.success};
  width: ${(props) => (props.width ? props.width : "80px")};
  height: ${(props) => (props.height ? props.height : "50px")}:;
`;
