import React from 'react';
import { StyledText } from './styles'
import { themes } from '../../themes/themes';

export function Text({
  content = "Text",
  type = "text",
  color = themes.dark.colors.text,
  size = themes.dark.font.body,
  font,
}) {
  return (
    <StyledText type={type} color={color} font={font} size={size}>
      {content}
    </StyledText>
  );
}