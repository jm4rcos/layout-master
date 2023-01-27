import styled, { css } from 'styled-components';
import { themes } from '../../themes/themes';

export const StyledText = styled.p`
    color: ${({ color }) => color && color};
    size: ${({ size }) => size && size};
`;