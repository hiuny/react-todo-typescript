import styles from '../Todo.module.css'

import { Todo } from '../App'
import React, { useEffect, useState } from 'react';

interface Props {
  readonly todo: Todo;
  readonly onRemove: (id: number) => void;
  readonly onToggle: (id: number) => void;
  readonly onEdit: (id: number, input: string) => void
}

const TodoItem = ({ todo, onRemove, onToggle, onEdit }: Props) => {
  const { id, text, done } = todo
  // 편집 입력 요소 표시여부 상태 선언
  const [showInput, setShowInput] = useState(false)
  // 편집 입력 값 상태 선언
  const [inputText, setInputText] = useState('')
  // createRef함수를 통한 ref 설정
  const editInput: React.RefObject<HTMLInputElement> = React.createRef()
  // 더블 클릭 이벤트 처리 함수
  const onDoubleClick = () => {
    console.log('onDoubleClick')
    setInputText(text)
    setShowInput(true)
  }
  // 변경 이벤트 처리 함수
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('onChange ' + e.target.value)
    setInputText(e.target.value)
  }
  // 키 입력 이벤트 처리 함수
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('handleKeyPress Enter inputText : ' + inputText)
      onEdit(id, inputText)
      setShowInput(false)
    }
  }
  // 입력 요소 포커스가 사라지면 실행되는 함수
  const handleBlur = () => {
    console.log('handleBlur inputText : ' + inputText)
    onEdit(id, inputText)
    setShowInput(false)
  }
  // 마운트될 때 편집 입력 요소값 설정
  useEffect(() => {
    console.log('useEffect todo = ' + todo)
    if (todo) {
      console.log('todo.text = ' + todo.text)
      setInputText(todo.text)
    }
  }, [todo])
  // 마운트될 때 편집 입력 요소 포커스 처리
  useEffect(() => {
    if (editInput.current) {
      editInput.current.focus()
    }
  }, [editInput])
  return (
    <div className={styles.item}>
      <input type="checkbox" checked={done} onChange={() => onToggle(id)}/>
      {/* 편집 상태일 때 ref 사용한 입력 요소 표시*/}
      {showInput && (
        <input
          value={inputText}
          onChange={onChange}
          onKeyPress={handleKeyPress}
          onBlur={handleBlur}
          ref={editInput}
        />
      )}
      {/* 편집 상태가 아닐 때 span 요소 표시 */}
      {!showInput && (
        <span
          onDoubleClick={onDoubleClick}
        >{text}</span>
      )}
      <button type="button" onClick={() => onRemove(id)}>삭제</button>
    </div>
  )
};

export default TodoItem;