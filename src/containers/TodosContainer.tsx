import { connect } from 'react-redux'
import {
  changeTodoInput,
  addTodo,
  toggleTodoStatus,
  removeTodo,
  clearAllTodos,
} from '../modules/todos'
import Todos from '../components/Todos'

// type
import { TodoState } from '../modules/todos'
import { bindActionCreators, Dispatch } from 'redux'
import { Todo } from '../App'

interface Props {
  readonly input: string
  readonly todos: Todo[]
  readonly removeTodo: (id: number) => void
  readonly toggleTodoStatus: (id: number) => void
  readonly clearAllTodos: () => void
  readonly addTodo: (input: string) => void
  readonly changeTodoInput: (input: string) => void
}

// connect 함수에 의해 상태와 스토어 상태 변경 함수를 props로 전달 받음
const TodosContainer = ({
  input,
  todos,
  changeTodoInput,
  addTodo,
  toggleTodoStatus,
  removeTodo,
  clearAllTodos,
}: Props) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeTodoInput}
      onInsert={addTodo}
      onToggle={toggleTodoStatus}
      onRemove={removeTodo}
      onClearAll={clearAllTodos}
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