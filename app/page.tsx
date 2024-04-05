const db = process.env.AMPLIFY_DB;

export default async function Home() {
  let todos: Record<string, any> = [];

  try {
    let response = await fetch("http://localhost:3001/api/todos");

    const data = (await response.json()) as any;

    // const data = await db.prepare("SELECT * FROM todos").all();

    todos = data.todos;
  } catch (error) {
    console.log(error);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl">Todos</h1>
      {todos.map((todo: any) => (
        <div
          key={todo.id}
          className="p-4 m-4 bg-gray-100 rounded-xl dark:bg-zinc-800/30"
        >
          <h2 className="font-semibold">{todo.title}</h2>
        </div>
      ))}
    </main>
  );
}
