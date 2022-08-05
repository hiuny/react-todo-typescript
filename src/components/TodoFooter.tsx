import { useContext } from 'react';
import TodoContext, { TodoConsumer } from '../contexts/todo';
import styles from '../Todo.module.css'

interface Props {
  readonly onClearAll: () => void
}

const TodoFooter = ({ onClearAll }: Props) => {
  return(
    <div className={styles.footer}>
      <button
        type="button"
        onClick={onClearAll}
      >모두 삭제</button>
    </div>
  )
};

export default TodoFooter;