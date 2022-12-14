import { createSelector } from 'reselect'

// type
import { TodoState } from '../modules/todos'

// Todo 항목 목록 전달 선택자 함수
const getTodos = (state: TodoState) => state.todos
// 필터링 유형 전달 선택자 함수
const getFilter = (state: TodoState) => state.filter
// 필터링 처리된 Todo 항목 목록 전달 선택자 함수
export const getFilteredTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    if (filter === 'ALL') {
      return todos;
    }
    if (filter === 'A') {
      return todos.filter((todo) => {
        return todo.done === false
      })
    }
    if (filter === 'B') {
      return todos.filter((todo => {
        return todo.done === true
      }))
    }
  }
)