import { Context } from "koa"
import * as UserController from "../../controller/user.controller"
import { AppDataSource } from "../../infrastructure/database/data-source"
import * as UserRepository from "../../repository/user.repository"

describe("UserController", () => {
  describe("getUser", () => {
    it("adds user details to the response body", async () => {
      const user = {
        firstName: "Rosie",
        lastName: "Kirby",
        age: 3
      }

      const context = {
        params: { id: 1 }
      } as any as Context

      // create a user so that we can then find that user
      const createdUser = await UserRepository.createRecord(user)
      console.log("createdUser: ", createdUser)

      await UserController.getUser(context)

      expect(context.body).toEqual(user)
    })
  })
})
