import styled from 'styled-components';
import { themes } from '../../themes/themes';

export const StyledInput = styled.input`
  background-color: ${(props) =>
    props.color ? props.color : themes.dark.colors.inputColor};
  border: ${(props) => (props.border ? props.border : "none")};
  width: ${(props) => (props.width ? props.width + 'px' : "60px")}; min-width: 60px;
  height: ${(props) => (props.height ? props.height + 'px' : "16px")}; min-height: 16px;
  border-radius: ${(props) => (props.radius ? props.radius : "5px")};
  color: ${(props) => (props.textColor ? props.textColor : themes.light.colors.light500)};
  padding-block: 10px;
  padding-inline: ${(props) => (props.padding ? props.padding : "10px")};
  font-size: ${(props) => (props.textSize ? props.textSize : "16px")};
`;