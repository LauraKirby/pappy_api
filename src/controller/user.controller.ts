import { Context } from "koa"
import * as UserRepository from "../repository/user.repository"

export const create = async (ctx: Context) => {
  const user = await UserRepository.createRecord(ctx.request.body)
  ctx.body = user
}

export const index = async (ctx: Context) => {
  ctx.body = await UserRepository.all()
}

export const update = async (ctx: Context) => {
  ctx.body = await UserRepository.updateRecord(ctx.params.id, ctx.request.body)
}
