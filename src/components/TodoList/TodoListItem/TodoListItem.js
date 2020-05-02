import React from 'react';
import Style from './TodoListItem.module.css';
import {Title} from '../../Title/Title';
import {Desc} from '../../Desc/Desc';

export function TodoListItem({todo}) {
    return (
        <li key={todo.id} className={Style.TodoListItem}>
            <div className="card">
                <Title element="h4">{todo.category}</Title>
                <Desc element="p">{todo.task}</Desc>
            </div>
        </li>
    )
}
