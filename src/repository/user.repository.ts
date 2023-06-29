import { User } from "../entity/user.entity"
import { AppDataSource } from "../infrastructure/database/data-source"

const userRepository = AppDataSource.getRepository(User)

export const all = async () => {
  const users = await userRepository.find()
  return users
}

export const createRecord = async (userData: any) => {
  // const user = userRepository.create(userData)

  return userRepository.save(userData)
}

export const getRecord = async (id: number) => {
  return userRepository.findOneBy({ id })
}

export const updateRecord = async (id: number, updatedFields: any) => {
  const userToUpdate = await userRepository.findOneBy({ id })

  if (userToUpdate) {
    userToUpdate.firstName = updatedFields.firstName ?? userToUpdate?.firstName
    userToUpdate.lastName = updatedFields.lastName ?? userToUpdate?.lastName
    userToUpdate.age = updatedFields.age ?? userToUpdate?.age
    return userRepository.save(userToUpdate)
  } else {
    return null
  }
}

export const deleteRecord = async (id: number) => {
  const result = await userRepository.delete({ id })

  return result
}
