import { connect, useDispatch, useSelector } from 'react-redux'
import {
  changeTodoInput,
  addTodo,
  toggleTodoStatus,
  removeTodo,
  clearAllTodos,
  changeFilter,
} from '../modules/todos'
import Todos from '../components/Todos'
import { useCallback } from 'react'

// type
import { Todo } from '../App'
import { TodoState } from '../modules/todos'

// connect 함수에 의해 상태와 스토어 상태 변경 함수를 props로 전달 받음
const TodosContainer = () => {
  const { input, todos, filter } = useSelector((state: TodoState) => ({
    input: state.input,
    todos: state.todos,
    filter: state.filter,
  }))
  const dispatch = useDispatch()
  const onChangeInput = useCallback((input: string) => dispatch(changeTodoInput(input)), [dispatch])
  const onInsert = useCallback((input: string) => dispatch(addTodo(input)), [dispatch])
  const onToggle = useCallback((id: number) => dispatch(toggleTodoStatus(id)), [dispatch])
  const onRemove = useCallback((id: number) => dispatch(removeTodo(id)), [dispatch])
  const onClearAll = useCallback(() => dispatch(clearAllTodos()), [dispatch])
  const onChangeFilter = useCallback((filter: string) => dispatch(changeFilter(filter)), [dispatch])
  const getFilteredTodos = (todos: Todo[], filter: string) => {
    if (filter === 'ALL') return todos
    if (filter === 'A') return todos.filter(o => !o.done)
    if (filter === 'B') return todos.filter(o => o.done)
  }
  const filteredTodos = getFilteredTodos(todos, filter)
  return (
    <Todos
      input={input}
      todos={filteredTodos}
      filter={filter}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
      onClearAll={onClearAll}
      onChangeFilter={onChangeFilter}
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