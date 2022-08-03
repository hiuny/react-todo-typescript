import { TodoConsumer } from '../contexts/todo';
import styles from '../Todo.module.css'

const TodoFooter = () => {
  return(
    <TodoConsumer>
      {({ actions }) => (
        <div className={styles.footer}>
          <button
            type="button"
            onClick={actions.onClearAll}
          >모두 삭제</button>
        </div>
      )}
    </TodoConsumer>
  )
};

export default TodoFooter;