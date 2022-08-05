import { createAction } from 'redux-actions'
import { createReducer } from 'typesafe-actions'
import { Todo } from '../App'

// 액션 타입
const CHANGE_TODO_INPUT = 'CHANGE_TODO_INPUT'
const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO_STATUS = 'TOGGLE_TODO_STATUS'
const REMOVE_TODO = 'REMOVE_TODO'
const CLEAR_ALL_TODOS = 'CLEAR_ALL_TODOS'
const RESTORE = 'RESTORE'

// 액션 생성 함수
export const changeTodoInput = createAction(CHANGE_TODO_INPUT,
  (input: string) => input,
)
export const addTodo = createAction(ADD_TODO,
  (input: string) => ({
    text: input,
    done: false,
  })
)
export const toggleTodoStatus = createAction(TOGGLE_TODO_STATUS,
  (id: number) => id,
)
export const removeTodo = createAction(REMOVE_TODO,
  (id: number) => id,
)
export const clearAllTodos = createAction(CLEAR_ALL_TODOS)
export const restore = createAction(RESTORE, (data: string) => data)

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

// 리듀서 함수 정의
const todos = createReducer(
  initialState,
  {
    [CHANGE_TODO_INPUT]: (state, { payload: input }) => ({
      ...state,
      input,
    }),
    [ADD_TODO]: (state, { payload: todo }) => {
      const newTodo = {
        ...todo,
        id: state.nextTodoId,
      }
      const nextTodoId = state.nextTodoId + 1
      return {
        ...state,
        nextTodoId,
        todos: state.todos.concat(newTodo),
      }
    },
    [TOGGLE_TODO_STATUS]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map(o => o.id === id ? {
        ...o,
        done: !o.done,
      } : o),
    }),
    [REMOVE_TODO]: (state, { payload: id }) => ({
      ...state,
        todos: state.todos.filter(o => o.id !== id),
    }),
    [CLEAR_ALL_TODOS]: (state, action) => ({
      ...state,
      todos: [],
    }),
    [RESTORE]: (state, action) => {
      console.log(action)
      console.log(action.payload.todos)
      console.log(action.payload.nextTodoId)
      return {
        ...state,
        todos: action.payload.todos,
        nextTodoId: action.payload.nextTodoId,
      }
    },
  },
)

export default todos