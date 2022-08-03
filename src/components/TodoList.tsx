import { useContext } from 'react';
import TodoContext from '../contexts/todo';
import styles from '../Todo.module.css'
import TodoItem from './TodoItem';

const TodoList = () => {
  const { state, actions } = useContext(TodoContext)
  return (
    <div className={styles.list}>
      {state.todos.map((o, i) => <TodoItem
        todo={o}
        key={i}
        onRemove={actions.onRemove}
        onToggle={actions.onToggle}
      />)}
    </div>
  );
};

export default TodoList;