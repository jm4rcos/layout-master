import styled from 'styled-components';
import { themes } from '../../themes/themes';

export const Wrapper = styled.div`
  position: relative;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  .color-editor {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    top: 100%;
    left: -14px;
    background-color: ${ themes.dark.colors.dark100};
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    margin-top: 16px;
    padding-bottom: 8px;

    input[type="color"] {
      cursor: pointer;
      width: 30px;
      height: 30px;
      border-radius: 4px;
      padding: 0;
      outline: 0;
      border: none;
    }
  }
`;