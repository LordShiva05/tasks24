import React from 'react';
import Style from './TodoList.module.css';  
import {TodoListItem} from './TodoListItem/TodoListItem';

export function TodoList(props) {
    const TodoLists = props.todoList.map((todo) => {
        return <TodoListItem todo={todo} /> 
    });

    return (
        <ul className={Style.TodoList}>
            {TodoLists}
        </ul>
    )
}
