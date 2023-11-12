import { Todo } from '../../model'
import { SingleTodo } from './components/SingleTodo/SingleTodo';

import './TodoList.css'

interface Props {
    todos: Todo;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className="todos">
            {todos.map((todo: string) => {
                return <SingleTodo 
                key={todo.id} 
                todo={todo} 
                todos={todos} 
                setTodos={setTodos} 
                />
            })}
        </div>
    )
}
