import styles from '../Todo.module.css'

import { Todo } from '../App'

interface Props {
  readonly todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  return (
    <div className={styles.item}>
      <input type="checkbox" />
      <span>{todo.text}</span>
      <button type="button">삭제</button>
    </div>
  )
};

export default TodoItem;