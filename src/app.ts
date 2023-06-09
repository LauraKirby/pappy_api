// Koa docs:
// https://github.com/koajs/koa
import Koa from "koa"
import koaBody from "koa-body"
import { pappyRouter } from "./route/protected"

const app = new Koa()

// setup server
console.log("setting up server")
app.use(koaBody())

app.use(async (ctx: any, next: any) => {
  await next()
  const rt = ctx.response.get("X-Response-Time")
  console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})

app.use(pappyRouter.routes())

// an example of how to add middleware the request/response cycle
// x-response-time
app.use(async (ctx: any, next: any) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set("X-Response-Time", `${ms}ms`)
})

export default app
