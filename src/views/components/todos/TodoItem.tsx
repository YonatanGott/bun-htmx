import { ITodo } from "../../../@types/todo";
import * as elements from "typed-html";

export const TodoItem = ({ content, completed, id }: ITodo) => {
  return (
    <div class="flex flex-row space-x-3">
      <p class="capitalize text-slate-700 hover:text-blue-600">{content}</p>
      <input
        type="checkbox"
        checked={Boolean(completed)}
        hx-post={`/todos/toggle/${id}`}
        hx-swap="outerHTML"
        hx-target="closest div"
      />
      <button
        class="text-red-700 font-semibold hover:text-white"
        hx-delete={`/todos/${id}`}
        hx-swap="outerHTML"
        hx-target="closest div"
      >
        X
      </button>
    </div>
  )
}