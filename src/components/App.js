import React, { useState, useRef, useCallback } from 'react';
import './App.css';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

function App() {

  const onToggle = useCallback(id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
    )
  })

  const [todos, setTodos] = useState([]);

  const onRemove = useCallback(id => {
    setTodos(todos.filter(todo => todo.id !== id));
    //todo에서 같은 id만 제외하고 나머지만 필터링.
  }, [todos])

  const nextId = useRef(0);

  /** 현재 todos의 index
   *  useRef로 렌더링이 안되게해서
   *  성능 향상
   */

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    };
    setTodos(todos.concat(todo));
    nextId.current += 1; //useRef +1 
  }, [todos])

  /** 할일 추가하기 
   *  기능
   */


  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />  {/** 할 일을 입력하세요 */}
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} /> {/** 할일 목록 */}
      </TodoTemplate>
    </div>
  );
}

export default App;
