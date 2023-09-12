import { Elysia } from 'elysia'
import { todosRoutes } from './todos'
import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import { BaseHtml } from "../views/baseHtml"

export const routes = new Elysia()
  .use(html())
  .get("/", ({ html }) =>
    html(
      <BaseHtml>
        <body
          class="flex w-full h-screen justify-center items-center bg-green-200"
          hx-get="/todos"
          hx-swap="innerHTML"
          hx-trigger="load"
        />
      </BaseHtml>
    )
  )
  .use(todosRoutes)