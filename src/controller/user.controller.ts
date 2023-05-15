import * as UserRepository from "../repository/user.repository"

export const update = () => {
  console.log("update function called from controller")
  UserRepository.updateRecord()
}
