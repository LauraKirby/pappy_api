import * as UserRepository from "../repository/user.repository"

export const update = async () => {
  console.log("update function called from controller")
  return UserRepository.updateRecord()
}
