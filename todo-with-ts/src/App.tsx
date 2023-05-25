import{ useState, ChangeEvent, KeyboardEvent, useEffect } from 'react';

import './App.css';

import { v4 as uuidv4 } from 'uuid';

import Input from "./components/Input";
import TodoList from './components/TodoList';

import type { Todo } from './types/todo';


function App() {
  const[todos,setTodos] = useState<Todo[]>([]);
  const [todoName, setTodoName] = useState<Todo['name']>('')
  const[searchValue,setSearchValue] = useState<Todo["name"]>('');
  const[selectedTodIds,setSelectedTodoIds] = useState<Todo['id'][]>([]);
  const [editedTodoId,seteditedTodoId] = useState<Todo["id"] | undefined>();
  const [editedName,setEditedName] = useState<Todo['name']>('');

  const handleSearchValue = ({
    target: {value},
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
  };
  
  const handleTodoName = ({
    target:{value},
  }:ChangeEvent<HTMLInputElement>) => {
    setTodoName(value);
  };


  const handleDeleteTodo = (id: Todo["id"]) =>{
    setTodos((prevState) => {
      const filterTodos = [...prevState].filter((todo) => todo.id !== id)
      return filterTodos;
    })
  }
  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) =>{
    if(e.key === "Enter"){
      addTodo();
    }
  }

 const addTodo = () => {
  setTodos((prevState) => [...prevState, {id:uuidv4(), name:todoName}]);
  setTodoName("");
  console.log(todos);
 }
 
 const toggleEditTodo = (id:Todo["id"]) => {
  seteditedTodoId((prevState) => (prevState === id ? undefined : id));
  
 }
 const handleEditedName = (name: Todo['name']) =>{
  setEditedName(name);
 }

 const editTodo = () => {
  setTodos((prevState) => {
    return prevState.map(({id,name}) => {
      if (id === editedTodoId) {
        return{id,name:editedName};
      }
      return {id,name};
    });
  });
 seteditedTodoId(undefined);
 setEditedName("");
};
  return (
    <div className="App">
      <Input value ={todoName} onChange={handleTodoName} onKeyUp={handleEnterPress} placeholder="Todo 이름을 입력해주세요"/>
      <button onClick={addTodo}>Todo 추가</button><br/>
      <Input onChange={handleSearchValue} placeholder="검색할 내용을 입력하세요" />
      <TodoList 
      todos={todos}
      searchValue={searchValue}
      editedTodoId={editedTodoId}
      deleteTodo={handleDeleteTodo}
      setSelectedTodoIds={setSelectedTodoIds}
      toggleEditTodo={toggleEditTodo}
      setEditedName={handleEditedName}
      editTodo={editTodo}
      />
    </div>
  );
}

export default App;
