import styled from "styled-components";

import { Button } from "../../../components/Button/styled";

export const InputBox = styled.div`
  display: flex;
  width: 35%;
  gap: 4px;
  ${Button} {
    flex-grow: 1;
    flex-shrink: 0;
    padding: 5px;
    border: none;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  flex-shrink: 0;
  width: 100%;
  padding: 4px;
  margin-bottom: 10px;
`;
