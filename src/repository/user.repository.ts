import { User } from "../entity/user.entity"
import { AppDataSource } from "../infrastructure/data-source"

const userRepository = AppDataSource.getRepository(User)

export const updateRecord = async (id: number, updatedFields: any) => {
  console.log("updateRecord function called from repository")
  const user = await userRepository.findOneBy({
    id: id
  })

  if (user) {
    user.firstName = updatedFields.firstName
    await userRepository.save(user)
    return user
  }
}

export const createRecord = async (userData: any) => {
  return userRepository.create(userData)
}
