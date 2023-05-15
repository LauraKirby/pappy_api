import * as UserRepository from "../repository/user.repository"

export const create = async (userData: any) => {
  console.log("create function called from controller")
  const user = await UserRepository.createRecord(userData)
  return user
}

export const index = async () => {
  return UserRepository.all()
}

export const update = async (userId: number, userData: any) => {
  console.log("update function called from controller")
  return UserRepository.updateRecord(userId, userData)
}
