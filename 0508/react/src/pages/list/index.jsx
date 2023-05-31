import { useState } from 'react';

import * as S from './styled';
import { meberList } from '../../constants/member-list';
import Button from '../../components/Button';

function List() {
  const [list, setList] = useState(meberList);

  const sortAscById = () => {
    setList(prevState => {
      return [...prevState].sort((a, b) => a.id - b.id);
    });
  };
  const sortDescById = () => {
    setList(prevState => {
      return [...prevState].sort((a, b) => b.id - a.id);
    });
  };

  const sortAscByName = () => {
    setList(prevState => {
      return [...prevState].sort((a, b) => (b.name < a.name ? 1 : -1));
    });
  };

  const sortDescByName = () => {
    setList(prevState => {
      return [...prevState].sort((a, b) => (a.name < b.name ? 1 : -1));
    });
  };

  const sortAscByLevel = () => {
    setList(prevState => {
      return [...prevState].sort((a, b) => {
        if (a.level === b.level) return 0;
        if (!a.level) return -1;
        return b.level < a.level ? -1 : 1;
      });
    });
  };

  return (
    <S.Container>
      <S.Title>React List</S.Title>
      <S.ButtonBox>
        <S.Button onClick={sortAscById}>id정렬</S.Button>
        <S.Button onClick={sortDescById}>id 내림차정렬</S.Button>
        <S.Button onClick={sortAscByName}>name정렬</S.Button>
        <S.Button onClick={sortDescByName}>name 내림차 정렬</S.Button>
        <S.Button onClick={sortAscByLevel}>level정렬</S.Button>
      </S.ButtonBox>
      <S.ListBox>
        <S.ListItem>
          <S.Desc>id</S.Desc>
          <S.Desc>name</S.Desc>
          <S.Desc>level</S.Desc>
        </S.ListItem>
      </S.ListBox>
      {list.map(({ id, name, level }) => {
        return (
          <S.ListItem key={id}>
            <S.Desc>{id}</S.Desc>
            <S.Desc>{name}</S.Desc>
            <S.Desc>{level || '없음'}</S.Desc>
          </S.ListItem>
        );
      })}
    </S.Container>
  );
}

export default List;
