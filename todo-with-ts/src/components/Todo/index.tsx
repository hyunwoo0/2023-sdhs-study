import type {Todo as TodoType} from "../../types/todo";
import Input from "../Input";
import Button from "../Button";
import {ChangeEvent} from 'react';
import * as S from './styled';
interface TodoProps{
    name:TodoType["name"];
    isEdited:boolean;
    deleteTodo: () => void;
    handleSelected: (checked:boolean) => void;
    toggleEditTodo: () => void;
    setEditedName: (name:TodoType["name"]) => void;
    editTodo: () => void;
}



function Todo({
    name,
    isEdited,
    deleteTodo,
    handleSelected,
    toggleEditTodo,
    setEditedName,
    editTodo,
}:TodoProps){
    const handleEditedName = ({
        target:{value},
    }:ChangeEvent<HTMLInputElement> ) => {
        setEditedName(value);
    }
    return <S.Li>
        {isEdited ? <Input defaultValue={name} onChange={handleEditedName} /> : <span>{name}</span>}
        <Button onClick={deleteTodo}>삭제</Button>
        <Button onClick={toggleEditTodo}>{isEdited ? "취소" : "수정"}</Button>
        {isEdited && <Button onClick={editTodo}>저장</Button>}
    </S.Li>;
}

export default Todo;