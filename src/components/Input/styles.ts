import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  color: #666360;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    background: transparent;
    flex: 1;
    border: none;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: #f4ede8 !important;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
