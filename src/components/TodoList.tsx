import { useState } from 'react';
import styles from '../Todo.module.css'
import TodoItem from './TodoItem';

import { Todo } from '../App'

interface Props {
  readonly todos: Todo[];
}

const TodoList = ({ todos }: Props) => {
  
  return (
    <div className={styles.list}>
      {todos.map((o, i) => <TodoItem todo={o} key={i} />)}
    </div>
  );
};

export default TodoList;