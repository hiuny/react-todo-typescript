import styles from '../Todo.module.css'
import TodoItem from './TodoItem';

// interface
import { Todo } from '../App'

interface Props {
  readonly todos?: Todo[]
  readonly onRemove: (id: number) => void
  readonly onToggle: (id: number) => void
  readonly onEdit: (id: number, input: string) => void
}

const TodoList = ({
  todos,
  onRemove,
  onToggle,
  onEdit,
}: Props) => {
  return (
    <div className={styles.list}>
      {todos && todos.map((o, i) => <TodoItem
        todo={o}
        key={i}
        onRemove={onRemove}
        onToggle={onToggle}
        onEdit={onEdit}
      />)}
    </div>
  );
};

export default TodoList;