import styles from '../Todo.module.css'
import TodoItem from './TodoItem';

// interface
import { Todo } from '../App'

interface Props {
  readonly todos: Todo[]
  readonly onRemove: (id: number) => void
  readonly onToggle: (id: number) => void
}

const TodoList = ({
  todos,
  onRemove,
  onToggle,
}: Props) => {
  return (
    <div className={styles.list}>
      {todos.map((o, i) => <TodoItem
        todo={o}
        key={i}
        onRemove={onRemove}
        onToggle={onToggle}
      />)}
    </div>
  );
};

export default TodoList;