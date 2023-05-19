import { Context } from "koa"
import * as TransactionRepository from "../repository/transaction.repository"

export const createTransaction = async (ctx: Context) => {
  const transaction = await TransactionRepository.createRecord(ctx.request.body)
  ctx.body = transaction
}

export const getTransaction = async (ctx: Context) => {
  const transaction = await TransactionRepository.getRecord(ctx.params.id)
  ctx.body = transaction
}
