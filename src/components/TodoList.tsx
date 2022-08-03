import { TodoConsumer } from '../contexts/todo';
import styles from '../Todo.module.css'
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <TodoConsumer>
      {({ state, actions }) => (
        <div className={styles.list}>
          {state.todos.map((o, i) => <TodoItem
            todo={o}
            key={i}
            onRemove={actions.onRemove}
            onToggle={actions.onToggle}
          />)}
        </div>
      )}
    </TodoConsumer>
  );
};

export default TodoList;