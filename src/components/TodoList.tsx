import { TodoConsumer } from '../contexts/todo';
import styles from '../Todo.module.css'
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <TodoConsumer>
      {(value) => (
        <div className={styles.list}>
          {value.state.todos.map((o, i) => <TodoItem
            todo={o}
            key={i}
            onRemove={value.actions.onRemove}
            onToggle={value.actions.onToggle}
          />)}
        </div>
      )}
    </TodoConsumer>
  );
};

export default TodoList;