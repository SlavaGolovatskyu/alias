import React from 'react';
import styled from 'styled-components';

const Input = ({ value, onChange }) => {
  return (
    <FormGroup>
      <InputText id="name" type="text" placeholder="test" />
      <Label htmlFor="name" />
    </FormGroup>
  );
};

const FormGroup = styled.div`
  --pad: 0.75rem;
  position: relative;
`;
const InputText = styled.input`
  border-radius: 8px;
  padding: var(--pad);
  outline: none;
  width: 100%;
  color: inherit;
  border: 1px solid #eee;
  background-color: #2c2537;

  &::placeholder {
    opacity: 0;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(calc(-50% - var(--pad))) scale(.8);
    color: red;
  }

  &:focus {
    border: 1px solid purple;
  }
`;
const Label = styled.label`
  position: absolute;
  left: var(--pad);
  top: var(--pad);
  pointer-events: none;
  background: #2c2537;
  padding-inline: .3em;
  transition: transform 200ms;
  transform-origin: left;
  translate: -.3em;
`;

export default Input;