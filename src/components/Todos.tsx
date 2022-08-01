import { useRef, useState } from 'react';
import TodoFooter from './TodoFooter';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

import { Todo } from '../App'

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const nextId = useRef(1)
  const onInsert = (text: string) => {
    const todo = {
      id: nextId.current,
      text,
      done: false,
    }
    setTodos(todos.concat(todo))
    nextId.current += 1
  }
  const onRemove = (id: number) => setTodos(todos.filter(o => o.id !== id))
  const onToggle = (id: number) => {
    setTodos(todos.map(o => (o.id === id ? { ...o, done: !o.done } : o)))
  }
  const onClearAll = () => setTodos([])

  return (
    <div>
      <TodoHeader />
      <TodoInput onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      <TodoFooter  onClearAll={onClearAll} />
    </div>
  );
};

export default Todos;