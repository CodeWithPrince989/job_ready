# Node.js Backend Learning Project

This folder contains beginner examples that build from Node.js fundamentals to HTTP servers, Express, and a TypeScript Express app. The TypeScript app is the main backend. The two JavaScript server files are standalone examples; run only one server at a time unless you want to use their different ports simultaneously.

## Requirements

- Node.js and npm
- PowerShell on Windows (commands below use `curl.exe` so they work in PowerShell)

Check your installation:

```powershell
node --version
npm --version
```

## Start the main TypeScript backend

Open PowerShell in this folder (`2_web\5_Node`) and run:

```powershell
npm install
npm run dev
```

Leave this terminal open. `tsc-watch` compiles the TypeScript source and starts the server after a successful compilation. It watches for source changes and restarts the server. When it prints `Server is running at http://localhost:8080`, open a second terminal and request the root route:

```powershell
curl.exe http://localhost:8080/
```

Expected JSON response:

```json
{"message":"Hello World"}
```

The TypeScript app currently has one route: `GET /`. It does not currently have the `/menu` or `/order` routes shown in the standalone JavaScript examples below.

### Change the port

The default port is `8080`. To use another port, set `PORT` before starting the server:

```powershell
$env:PORT = "3000"
npm run dev
```

Then send requests to `http://localhost:3000/`. `PORT` must be a whole number between `1` and `65535`. Open a new PowerShell window if you want to remove the environment variable from your current window.

## Learn the files

### `1_node_fundamental.js`

Run it with:

```powershell
node .\1_node_fundamental.js
```

This introductory script prints the Node.js, V8, and libuv versions, the operating-system platform, and the number of logical CPUs. It is not a web server and does not listen on a port. The built-in `process` object provides runtime and platform information; the `os` module provides operating-system information.

### `2_nodeserver.js` — built-in Node.js HTTP server

Run it with:

```powershell
node .\2_nodeserver.js
```

This uses Node's built-in `http` module, without Express. It listens on port `8081` and implements:

| Method | Path | Purpose |
|---|---|---|
| `GET` | `/menu` | Returns the menu as JSON |
| `POST` | `/order` | Reads a JSON request body and returns the submitted order |

Try the menu route from a second terminal:

```powershell
curl.exe http://localhost:8081/menu
```

Try submitting an order:

```powershell
curl.exe -X POST http://localhost:8081/order -H "Content-Type: application/json" -d '{"item":"biryani"}'
```

The HTTP server checks the request method and path, writes the response status and JSON content type, and ends each response with `res.end()`. For `/order`, it collects the incoming request body and parses it as JSON. Invalid JSON receives a `400` response.

### `3_expressserver.js` — Express JavaScript example

Run it with:

```powershell
node .\3_expressserver.js
```

This is the same menu-and-order example using Express instead of manually handling HTTP requests. It listens on port `8082` and provides `GET /menu` and `POST /order`. Test it with:

```powershell
curl.exe http://localhost:8082/menu
curl.exe -X POST http://localhost:8082/order -H "Content-Type: application/json" -d '{"item":"biryani"}'
```

`express.json()` parses incoming JSON request bodies and makes the parsed value available as `req.body`. `res.json()` sends a JSON response. This file uses ES module `import` syntax because this project declares `"type": "module"` in `package.json`.

### TypeScript backend source

- `src/index.ts` is the entry point. It creates a Node HTTP server around the Express application and listens on the validated `env.PORT`.
- `src/app/index.ts` creates the Express application and defines its `GET /` route. Keep route and middleware setup here as the backend grows.
- `src/env.ts` reads `process.env` and uses Zod to validate `PORT`. It defaults to `8080` and rejects values outside the valid port range.

### Project configuration and generated files

- `package.json` lists dependencies and commands. `npm run dev` starts the TypeScript watcher.
- `package-lock.json` records the exact dependency versions installed by npm. Keep it with the project so installs are reproducible.
- `tsconfig.json` configures TypeScript. `rootDir` points to `src`, `outDir` sends compiled files to `dist`, `module: "nodenext"` follows Node's ES module rules, and `strict` enables stricter type checking.
- `.gitignore` keeps `node_modules`, compiled `dist` output, environment files, and generated root declaration files out of source control. Source `.ts` files and project `.json` files must remain trackable.
- `dist/` contains generated JavaScript and type declarations. It is created by the compiler; edit files in `src/`, not files in `dist/`.
- `env.js`, `env.d.ts`, and their map files at the project root are generated remnants from an earlier compile and are not the current source. The active source is `src/env.ts`; current TypeScript output belongs in `dist/`.

## What happens when a request reaches the server?

1. Start a server process with one of the commands above. The process binds to its port and waits for requests.
2. A client such as `curl.exe` sends an HTTP method, path, headers, and (for a POST request) optionally a body.
3. The server matches the method and path to a route.
4. The route processes the request and sends an HTTP status, headers, and response body.
5. The client prints the response. A connection error usually means the server is not running on that port.

## Troubleshooting

- **Connection refused:** Start the server and keep its terminal open. Check that you used the correct port: `8080` for the TypeScript app, `8081` for the Node HTTP example, or `8082` for the Express example.
- **TypeScript compilation errors:** Read the errors in the `npm run dev` terminal. The server starts only after compilation succeeds.
- **Port already in use:** Stop the other process using that port, or set a different `PORT` for the TypeScript server.
- **PowerShell does not run `curl`:** Use `curl.exe` as shown above.
- **Order request returns an error:** Include the `Content-Type: application/json` header and valid JSON in the request body.

## Further reading

- [Node.js HTTP](https://nodejs.org/api/http.html)
- [Express getting started](https://expressjs.com/en/starter/hello-world.html)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)
- [Bun HTTP server](https://bun.com/docs/runtime/http/server)
- [Fastify getting started](https://fastify.dev/docs/latest/Guides/Getting-Started/)
- [Hono documentation](https://hono.dev/docs/)
- [Elysia documentation](https://elysiajs.com/)
