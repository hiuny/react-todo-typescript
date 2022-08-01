import { useCallback, useRef, useState } from 'react';
import TodoFooter from './TodoFooter';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

import { Todo } from '../App'

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const nextId = useRef(1)
  const onInsert = useCallback((text: string) => {
    const todo = {
      id: nextId.current,
      text,
      done: false,
    }
    setTodos(todos => todos.concat(todo))
    nextId.current += 1
  }, [])
  const onRemove = useCallback(
    (id: number) =>
      setTodos(
        todos => todos.filter(o => o.id !== id)
      ),
    [],
  )
  const onToggle = useCallback(
    (id: number) =>
      setTodos(
        todos => todos.map(o => (o.id === id ? { ...o, done: !o.done } : o))
      ),
    [],
  )
  const onClearAll = useCallback(
    () => setTodos(() => []),
    [],
  )

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