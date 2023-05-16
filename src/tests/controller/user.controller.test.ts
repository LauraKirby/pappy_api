import { Context } from "koa"
import * as UserController from "../../controller/user.controller"
import * as UserRepository from "../../repository/user.repository"

describe("UserController", () => {
  describe("getUser", () => {
    it("adds user details to the response body", async () => {
      const user = {
        firstName: "Rosie",
        lastName: "Kirby",
        age: 3
      }

      jest
        .spyOn(UserRepository, "getRecord")
        .mockReturnValue(Promise.resolve(user))

      const context = {
        params: { id: 1 }
      } as any as Context

      await UserController.getUser(context)

      expect(context.body).toEqual(user)
    })
  })
})
