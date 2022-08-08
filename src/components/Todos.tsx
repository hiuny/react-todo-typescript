import TodoFooter from './TodoFooter';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

// type
import { Todo } from '../App'
import TodoFilter from './TodoFilter';

interface Props {
  readonly input: string
  readonly todos?: Todo[]
  readonly filter: string
  readonly onChangeInput: (input: string) => void
  readonly onInsert: (input: string) => void
  readonly onToggle: (id: number) => void
  readonly onRemove: (id: number) => void
  readonly onClearAll: () => void
  readonly onChangeFilter: (filter: string) => void
  readonly onEdit: (id: number, input: string) => void
}

const Todos = ({
  input,
  todos,
  filter,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
  onClearAll,
  onChangeFilter,
  onEdit,
}: Props) => {
  return (
    <div>
      <TodoHeader />
      <TodoInput
        input={input}
        onInsert={onInsert}
        onChangeInput={onChangeInput}
      />
      <TodoFilter
        filter={filter}
        onChangeFilter={onChangeFilter}
      />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        onEdit={onEdit}
      />
      <TodoFooter
        onClearAll={onClearAll}
      />
    </div>
  );
};

export default Todos;