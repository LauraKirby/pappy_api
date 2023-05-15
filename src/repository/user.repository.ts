import { User } from "../entity/user.entity"
import { AppDataSource } from "../infrastructure/database/data-source"

const userRepository = AppDataSource.getRepository(User)

export const all = async () => {
  return userRepository.find()
}

export const createRecord = async (userData: any) => {
  return userRepository.create(userData)
}

export const getRecord = async (id: number) => {
  return userRepository.findOneBy({ id })
}

export const updateRecord = async (id: number, updatedFields: any) => {
  const user = await userRepository.findOneBy({ id })

  if (user) {
    user.firstName = updatedFields.firstName
    user.lastName = updatedFields.lastName
    user.age = updatedFields.age
    await userRepository.save(updatedFields)

    return user
  }
}

export const deleteRecord = async (id: number) => {
  const result = await userRepository.delete({ id })

  return result
}
