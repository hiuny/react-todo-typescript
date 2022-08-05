import { Todo } from '../App'

// 액션 타입
const CHANGE_TODO_INPUT = 'CHANGE_TODO_INPUT' as const
const ADD_TODO = 'ADD_TODO' as const
const TOGGLE_TODO_STATUS = 'TOGGLE_TODO_STATUS' as const
const REMOVE_TODO = 'REMOVE_TODO' as const
const CLEAR_ALL_TODOS = 'CLEAR_ALL_TODOS' as const

// 액션 생성 함수
export const changeTodoInput = (input: string) => ({
  type: CHANGE_TODO_INPUT,
  input,
})
export const addTodo = (input: string) => ({
  type: ADD_TODO,
  todo: {
    text: input,
    done: false,
  }
})
export const toggleTodoStatus = (id: number) => ({
  type: TOGGLE_TODO_STATUS,
  id,
})
export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  id,
})
export const clearAllTodos = () => ({
  type: CLEAR_ALL_TODOS,
})

// 상태 인터페이스 정의
export interface TodoState {
  input: string,
  todos: Todo[];
  nextTodoId: number;
}

// 초기 상태
const initialState: TodoState = {
  input: '',
  todos: [],
  nextTodoId: 1,
}

// 액션 타입 정의
type TodoAction = ReturnType<typeof changeTodoInput>
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodoStatus>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof clearAllTodos>

// 리듀서 함수 정의
function todos(state: TodoState = initialState, action: TodoAction) {
  switch (action.type) {
    case CHANGE_TODO_INPUT:
      return {
        ...state,
        input: action.input,
      }
    case ADD_TODO:
      const newTodo = {
        ...action.todo,
        id: state.nextTodoId,
      }
      state.nextTodoId++;
      return {
        ...state,
        todos: state.todos.concat(newTodo),
      }
    case TOGGLE_TODO_STATUS:
      console.log(action.id)
      return {
        ...state,
        todos: state.todos.map(o => o.id === action.id ? {
          ...o,
          done: !o.done,
        } : o),
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(o => o.id !== action.id),
      }
    case CLEAR_ALL_TODOS:
      return {
        ...state,
        todos: [],
      }
    default:
      return state
  }
}

export default todos