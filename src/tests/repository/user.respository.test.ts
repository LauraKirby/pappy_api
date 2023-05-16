import * as UserRepository from "../../repository/user.repository"

describe("UserRepository", () => {
  // describe("createRecord", () => {
  //   it("adds user details to the response body", async () => {
  //     const user = {
  //       firstName: "Rosie",
  //       lastName: "Kirby",
  //       age: 3
  //     }

  //     const createdUser = await UserRepository.createRecord(user)

  //     expect(createdUser).toEqual(user)
  //   })
  // })

  describe("getRecord", () => {
    it("adds user details to the response body", async () => {
      const user = {
        firstName: "Rosie",
        lastName: "Kirby",
        age: 3
      }

      const user2 = await UserRepository.createRecord(user)
      console.log("user2: ", user2)
      const createdUser = await UserRepository.all()

      expect(createdUser.length).toBe(1)
    })
  })
})
