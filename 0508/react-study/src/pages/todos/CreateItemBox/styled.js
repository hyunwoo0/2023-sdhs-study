import styled from "styled-components";

import { Button } from "../../../components/Button/styled";

export const InputBox = styled.div`
  display: flex;
  width: 100%;
  gap: 4px;
  ${Button} {
    flex-grow: 1;
    flex-shrink: 0;
    border: none;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  flex-shrink: 0;
  width: 100%;
  padding: 4px;
`;
