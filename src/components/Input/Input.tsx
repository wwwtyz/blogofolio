import React, { forwardRef } from 'react';
import { useState } from 'react';
import {
  InputContainer,
  InputError,
  InputLabel,
  StyledInput
} from './input.styled';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, error, ...passThroughProps }, ref) => {
    const [value, setValue] = useState<string>('');
    const placeholder = label == 'Confirm Password' ? label : `Your ${label}`;
    const type = label.toLowerCase;
    return (
      <InputContainer ref={ref}>
        <InputLabel htmlFor={label}>{label}</InputLabel>
        <StyledInput
          value={value}
          name={label}
          placeholder={placeholder}
          {...passThroughProps}
        />
        <InputError>{error}</InputError>
      </InputContainer>
    );
  }
);
export default Input;
