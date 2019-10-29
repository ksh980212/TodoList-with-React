import React from 'react'
import TodoListItem from './TodoListItem'
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todos.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
        /**
         * Todo 목록 * n 개
         */
    )
}

export default TodoList
