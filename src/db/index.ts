import { Database } from 'bun:sqlite';
import { ITodo } from '../@types/todo';


export class TodosDatabase {

  private db: Database;

  constructor() {
    this.db = new Database('todos.db');
    // Initialize the database
    this.init()
      .then(() => console.log('Database initialized'))
      .catch(console.error);
  }

  // Get all todo
  async getAllTodos() {
    return this.db.query('select * from todos').all() as ITodo[];
  }

  // Add a todo
  async createTodo(content: string) {
    return this.db.query(`INSERT INTO todos (content) VALUES (?) RETURNING *`).get(content) as ITodo;
  }

  // Update a todo
  async updateTodo(id: number) {
    return this.db.query(`UPDATE todos SET completed = ((completed | 1) - (completed & 1)) WHERE  id = $id RETURNING *`).get({ $id: id }) as ITodo;
    // return this.db.query(`select * from todos WHERE id = $id`).get({ $id: id }) as ITodo;
  }

  // Delete a todo
  async deleteTodo(id: number) {
    return this.db.run(`DELETE FROM todos WHERE id = ${id}`)
  }

  // Initialize the database
  async init() {
    return this.db.run('CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, content TEXT, completed INTEGER DEFAULT 0)');
  }
}