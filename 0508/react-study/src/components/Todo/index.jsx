import Button from "../Button";

import * as S from "./styled";

import Checkbox from "../Checkbox";
function Todo(props) {
  const { deleteTodo, handleSelected } = props;

  return (
    <S.Container>
      <Checkbox onChange={handleSelected} />
      <S.Title>{props.children}</S.Title>
      <S.Button onClick={deleteTodo}>삭제</S.Button>
    </S.Container>
  );
}

export default Todo;
