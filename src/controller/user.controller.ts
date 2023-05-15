import * as UserRepository from "../repository/user.repository"

export const update = async (userId: number, userData: any) => {
  console.log("update function called from controller")
  return UserRepository.updateRecord(userId, userData)
}
