import React from 'react';
import styled from 'styled-components';

const Button = ({ selected, onClick, children, disabled }) => {
  return (
    <Btn disabled={disabled} selected={selected} onClick={onClick}>
      {children}
    </Btn>
  );
};

export const Btn = styled.button`
  padding: 4px 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #667085;
  border-radius: 5px;
  outline: none;
  border: none;
  transition: all .4s ease-in-out;
  cursor: pointer;

  &:disabled {
    background: rgb(240, 240, 240);
    cursor: not-allowed;
  }

  ${({ selected }) => selected && `
    color: #6941C6;
    background: #E8C1FF;
  `}

  &:hover {
    color: darken(#6941C6, 66%);
    background: darken(#E8C1FF, 66%);
  }
`;

export default Button;