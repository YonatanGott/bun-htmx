import { Elysia } from "elysia";
import { routes } from './routes'
const PORT = 5000

const app = new Elysia()
app.get("/styles.css", () => Bun.file("./tailwind-gen/styles.css"))
app.use(routes)
app.listen(PORT)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
