import React from 'react';
import { StyledInput } from './styles';

export function Input({
    color,
    border,
    textSize,
    width,
    height,
    padding,
    value,
    onChange,
    type,
    placeholder,
    ...props
}) {
  return(
    <StyledInput
        padding={padding}
        type={type}
        value={value}
        onChange={onChange}
        color={color}
        width={width}
        height={height}
        border={border}
        textSize={textSize}
        placeholder={placeholder}
        {...props}
    />
  )
}