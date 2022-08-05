import { connect, useDispatch, useSelector } from 'react-redux'
import {
  changeTodoInput,
  addTodo,
  toggleTodoStatus,
  removeTodo,
  clearAllTodos,
} from '../modules/todos'
import Todos from '../components/Todos'
import { useCallback } from 'react'

// type
import { TodoState } from '../modules/todos'

// connect 함수에 의해 상태와 스토어 상태 변경 함수를 props로 전달 받음
const TodosContainer = () => {
  const { input, todos } = useSelector((state: TodoState) => ({
    input: state.input,
    todos: state.todos,
  }))
  const dispatch = useDispatch()
  const onChangeInput = useCallback((input: string) => dispatch(changeTodoInput(input)), [dispatch])
  const onInsert = useCallback((input: string) => dispatch(addTodo(input)), [dispatch])
  const onToggle = useCallback((id: number) => dispatch(toggleTodoStatus(id)), [dispatch])
  const onRemove = useCallback((id: number) => dispatch(removeTodo(id)), [dispatch])
  const onClearAll = useCallback(() => dispatch(clearAllTodos()), [dispatch])
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
      onClearAll={onClearAll}
    />
  )
}

export default connect(
  (state: TodoState) => ({
    input: state.input,
    todos: state.todos,
  }),
  {
    changeTodoInput,
    addTodo,
    toggleTodoStatus,
    removeTodo,
    clearAllTodos
  },
)(TodosContainer)