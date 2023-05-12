import * as S from "./styled";

import Todo from "../../../components/Todo";

function ItemList({ todos, searchValue, deleteTodo, setSelectTodoIds }) {
  //7. (6)에서 searchValue를 전달받았다.(검색창에 입력한 값)
  return (
    <S.ItemList>
      {todos
        //8.filter함수를 사용해준다.
        //includes로 todo의 name에 검색한 값이(searchValue) 있는지 확인한다.
        .filter((todo) => todo.name.includes(searchValue))
        .map(({ id, name }) => {
          const handleDeleteTodo = () => {
            deleteTodo(id);
          };

          const handleSelected = (checked) => {
            if (checked) {
              // checkbox가 check 되었을 때 (todo를 선택 했을때)
              //기존에 선택 되어 있던 selectedTodoIds에 새로 선택한 todo의
              setSelectTodoIds((prevState) => [...prevState, id]);
            } else {
              setSelectTodoIds((prevState) =>
                prevState.filter((prevId) => prevId !== id)
              );
            }
            console.log({ id, checked });
          };
          return (
            <Todo
              key={id}
              deleteTodo={handleDeleteTodo}
              handleSelected={handleSelected}
            >
              {name}
            </Todo>
          );
        })}
    </S.ItemList>
  );
}

export default ItemList;
