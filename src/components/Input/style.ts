import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 14px;
  color: #303030;
  padding: 8px 0px;
  font-family: "Roboto", sans-serif;
`;

export const InputContent = styled.input`
  font-family: "Roboto", sans-serif;
  outline: none;
  ::placeholder {
    color: #e1e1e1;
  }
`;
