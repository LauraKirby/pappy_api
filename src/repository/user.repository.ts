import { User } from "../entity/user.entity"
import { AppDataSource } from "../infrastructure/data-source"

const userRepository = AppDataSource.getRepository(User)

export const updateRecord = async () => {
  console.log("updateRecord function called from repository")
  const user = await userRepository.findOneBy({
    id: 1
  })

  if (user) {
    user.firstName = "Umed"
    await userRepository.save(user)
    return user
  }
}
