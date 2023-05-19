// Koa Router Docs:
// https://github.com/koajs/router/blob/HEAD/API.md

import Router from "@koa/router"
import * as AccountController from "../controller/account.controller"
import * as TransactionController from "../controller/transaction.controller"
import * as UserController from "../controller/user.controller"

export const pappyRouter = new Router()

pappyRouter.get("/", async (ctx, next) => {
  ctx.body = "home"
})

pappyRouter.get("/users", UserController.getUsers)
pappyRouter.get("/users/:id", UserController.getUser)
pappyRouter.post("/users", UserController.createUser)
pappyRouter.put("/users/:id", UserController.updateUser)
pappyRouter.delete("/users/:id", UserController.deleteUser)

pappyRouter.post("/accounts", AccountController.createAccount)
pappyRouter.get("/accounts/:id", AccountController.getAccount)

pappyRouter.post("/transactions", TransactionController.createTransaction)
pappyRouter.get("/transactions/:id", TransactionController.getTransaction)
