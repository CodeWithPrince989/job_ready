bun webserver => https://bun.com/docs/runtime/http/server

fastify webserver => https://fastify.dev/docs/latest/Guides/Getting-Started/

hono weberver => https://hono.dev/docs/

elysia webserver => https://elysiajs.com/

main thing is that all have same logic

src folder industry standard to manage files

tsc --init => for tsconfig.json

tsc -p .  => to run ts file in ts file which is in src
node dist/index.js => to run dist js file and get output

npx gitignore Node => automatically gitignore mein ignore karne wali file likh dega

npm i typescript -g => system mein install kardega
npm i typescript -D => only install in development file 

npm i tsc-watch => typescript ko watch karta hai/ compile karti hai

npm run dev => ye chalata rahega "dev": "tsc-watch --onSuccess \"node ./dist/index.js\""

DT dikhe npm website per ki bhi library ki means uska types definition available hai
example: express mein hai to we use => npm i @types/express -D
- npm i @types/<PACKAGE_NAME> -D

to add runtime validation => npm i zod

curl http://localhost:8080 server runnning