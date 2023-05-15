// Koa Router Docs:
// https://github.com/koajs/router/blob/HEAD/API.md

import Router from "@koa/router"
import * as UserController from "../controller/user.controller"
export const pappyRouter = new Router()

pappyRouter.get("/", (ctx, next) => {
  ctx.body = "this will eventually not be a protected route"
})

pappyRouter.get("/users", (ctx, next) => {
  ctx.body = "this will eventually be a list of users"
})

pappyRouter.put("/users/:id", async (ctx, next) => {
  console.log("ctx.request.type: ", ctx.request.type)
  console.log("ctx.request.body: ", ctx.request.body)
  console.log("ctx.params: ", ctx.params)
  console.log("\n\n\n\n\n")
  const userId = Number(ctx.params.id)
  const userData = ctx.request.body
  const updatedUser = await UserController.update(userId, userData)

  ctx.body = updatedUser
})
