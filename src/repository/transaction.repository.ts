import { Transaction } from "../entity/transaction.entity"
import { AppDataSource } from "../infrastructure/database/data-source"

const transactionRepository = AppDataSource.getRepository(Transaction)

export const createRecord = async (transactionData: any) => {
  return transactionRepository.save(transactionData)
}

export const getRecord = async (id: string) => {
  return transactionRepository.findOneBy({ id })
}
