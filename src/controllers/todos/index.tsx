
import { TodoList } from "../../views/components/todos/TodoList";
import * as elements from "typed-html";
import { TodoItem } from "../../views/components/todos/TodoItem";
import { TodosDatabase } from "../../db";
import { ITodo } from "../../@types/todo";

export class TodosController {

  private db: TodosDatabase = new TodosDatabase()

  async todos() {
    const todos: ITodo[] = await this.db.getAllTodos()
    return <TodoList todos={todos} />;
  }

  async newTodo({ content }: { content: string }) {
    const newTodo: ITodo = await this.db.createTodo(content)
    return <TodoItem {...newTodo} />;
  }

  async toggleTodo({ id }: { id: number }) {
    const newTodo: ITodo = await this.db.updateTodo(id)
    return <TodoItem {...newTodo} />;
  }

  async delete({ id }: { id: number }) {
    return await this.db.deleteTodo(id)
  }
}

