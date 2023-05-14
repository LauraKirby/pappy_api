import Koa from "koa"
import { AppDataSource } from "./data-source"
import { User } from "./entity/user"
import { subdomains } from "./routes/protected"
// const Koa = require("koa");
const app = new Koa()

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log(`Saved a new user with id: ${user.id}`)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

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
  })
  .catch((error) => {
    console.log(error)
  })
