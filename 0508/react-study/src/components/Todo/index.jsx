import Button from "../Button";

import * as S from "./styled";

function Todo(props) {
  const { deleteTodo } = props;

  return (
    <S.Container>
      <S.Title>{props.children}</S.Title>
      <S.Button onClick={deleteTodo}>삭제</S.Button>
    </S.Container>
  );
}

export default Todo;
