import { ITodo } from "../../../@types/todo";
import * as elements from "typed-html";
import { TodoItem } from "./TodoItem";
import { TodoForm } from "./TodoForm";



export const TodoList = ({ todos }: { todos: ITodo[] }) => {
  return (
    <div>
      {todos?.map((todo) => (
        <TodoItem {...todo} />
      ))}
      <TodoForm />
    </div>
  );
}