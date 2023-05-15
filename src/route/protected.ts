// Koa Router Docs:
// https://github.com/koajs/router/blob/HEAD/API.md

import Router from "@koa/router"
import * as UserController from "../controller/user.controller"

export const pappyRouter = new Router()

pappyRouter.get("/users", UserController.index)
pappyRouter.post("/users", UserController.create)
pappyRouter.put("/users/:id", UserController.update)
