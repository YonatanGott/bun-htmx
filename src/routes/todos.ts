import { Elysia, t } from 'elysia'
import { TodosController } from '../controllers/todos';

const controller: TodosController = new TodosController()

export const todosRoutes = new Elysia({ prefix: '/todos' })
  .get('/', async () => {

    return await controller.todos();
  })
  .post(
    "/toggle/:id",
    async ({ params }) => {
      const id = params.id
      const newTodo = await controller.toggleTodo({ id });
      return newTodo
    },
    {
      params: t.Object({
        id: t.Numeric(),
      }),
    }
  )
  .post('/', async ({ body }) => {
    const content = body.content
    const newTodo = await controller.newTodo({ content })
    return newTodo
  }, {
    body: t.Object({
      content: t.String({ minLength: 1 }),
    }),
  })
  .delete('/:id', async ({ params }) => {
    const id = params.id
    await controller.delete({ id })
  },
    {
      params: t.Object({
        id: t.Numeric(),
      }),
    })
