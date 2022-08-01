import { useState } from 'react';
import TodoFooter from './TodoFooter';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

import { Todo } from '../App'

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <div>
      <TodoHeader />
      <TodoInput />
      <TodoList todos={todos} />
      <TodoFooter />
    </div>
  );
};

export default Todos;