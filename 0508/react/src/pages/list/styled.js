import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 300px;
  height: 100vh;
  margin: 0 auto;
  padding: 16px;
`;

export const Title = styled.h2`
  padding: 15px;
`;

export const ListBox = styled.ul`
  width: 100%;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 4px 0;
`;

export const Desc = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonBox = styled.div`
  display: flex;
`;
export const Button = styled.button`
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  border: none;
  padding: 4px 8px;
  margin-right: 5px;
`;
