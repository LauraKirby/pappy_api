import { Context } from "koa"
import * as UserRepository from "../repository/user.repository"

export const createUser = async (ctx: Context) => {
  const user = await UserRepository.createRecord(ctx.request.body)
  ctx.body = user
}

export const getUsers = async (ctx: Context) => {
  ctx.body = await UserRepository.all()
}

export const getUser = async (ctx: Context) => {
  ctx.body = await UserRepository.getRecord(ctx.params.id)
}

export const updateUser = async (ctx: Context) => {
  ctx.body = await UserRepository.updateRecord(ctx.params.id, ctx.request.body)
}

export const deleteUser = async (ctx: Context) => {
  ctx.body = await UserRepository.deleteRecord(ctx.params.id)
}
