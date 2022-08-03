import { useContext } from 'react';
import TodoContext, { TodoConsumer } from '../contexts/todo';
import styles from '../Todo.module.css'

const TodoFooter = () => {
  const { actions } = useContext(TodoContext)
  return(
    <div className={styles.footer}>
      <button
        type="button"
        onClick={actions.onClearAll}
      >모두 삭제</button>
    </div>
  )
};

export default TodoFooter;