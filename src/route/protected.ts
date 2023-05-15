import Router from "@koa/router"
import * as UserController from "../controller/user.controller"
export const subdomains = new Router()

subdomains.get("/", (ctx, next) => {
  ctx.body = "this will eventually not be a protected route"
})

subdomains.get("/users", (ctx, next) => {
  ctx.body = "this will eventually be a list of users"
})

subdomains.get("/user", async (ctx, next) => {
  const updatedUser = await UserController.update()

  ctx.body = updatedUser
})
