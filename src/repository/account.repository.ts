import { Account } from "../entity/account.entity"
import { AppDataSource } from "../infrastructure/database/data-source"

const accountRepository = AppDataSource.getRepository(Account)

export const createRecord = async (accountData: any) => {
  return accountRepository.save(accountData)
}

export const getRecord = async (id: string) => {
  return accountRepository.findOneBy({ id })
}
