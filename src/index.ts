import Koa from "koa"
import { AppDataSource } from "./infrastructure/data-source"
import { subdomains } from "./route/protected"

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })

const app = new Koa()

// setup database

// setup server
console.log("setting up server")
app.use(async (ctx: any, next: any) => {
  await next()
  const rt = ctx.response.get("X-Response-Time")
  console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})

app.use(subdomains.routes())

// an example of how to add middleware the request/response cycle
// x-response-time
app.use(async (ctx: any, next: any) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set("X-Response-Time", `${ms}ms`)
})

// if you wanted to add custom logging for any type of error
// you would add that here.
app.on("error", (err: any) => {
  console.log("server error", err)
})

console.log("starting server")
app.listen(3000)
