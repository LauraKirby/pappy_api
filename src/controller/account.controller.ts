import { Context } from "koa"
import * as AccountRepository from "../repository/account.repository"

export const createAccount = async (ctx: Context) => {
  const account = await AccountRepository.createRecord(ctx.request.body)
  ctx.body = account
}

export const getAccount = async (ctx: Context) => {
  console.log("id for account: ", ctx.params.id)
  const account = await AccountRepository.getRecord(ctx.params.id)
  console.log("account found: ", account)
  ctx.body = account
}
