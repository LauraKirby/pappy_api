import { User } from "entity/user.entity"
import { DataSource } from "typeorm"
import { AppDataSource } from "../../infrastructure/database/data-source"
import * as UserRepository from "../../repository/user.repository"

describe("UserRepository", () => {
  let myDB: DataSource
  beforeAll(async () => {
    myDB = await AppDataSource.initialize()
  })

  beforeEach(async () => {
    await myDB.runMigrations()
  })

  afterEach(async () => {
    await myDB.dropDatabase()
  })

  afterAll(async () => {
    await myDB.destroy()
  })

  describe("all", () => {
    console.log("process.env.NODE_ENV: ", process.env.NODE_ENV)
    console.log("process.env.DB_NAME: ", process.env.DB_NAME)
    console.log("process.env.DB_DROP_SCHEMA: ", process.env.DB_DROP_SCHEMA)
    console.log("process.env.DB_SYNCHRONIZE: ", process.env.DB_SYNCHRONIZE)

    beforeEach(async () => {
      const user = {
        firstName: "Rosie",
        lastName: "Kirby",
        age: 3
      }

      const user2 = {
        firstName: "Pappy",
        lastName: "Lim",
        age: 5
      }

      await UserRepository.createRecord(user)
      await UserRepository.createRecord(user2)
    })

    it("gets all user records", async () => {
      const users = await UserRepository.all()

      expect(users.length).toBe(2)
    })
  })

  describe("createRecord", () => {
    it("creates a user", async () => {
      const user = {
        firstName: "Mel",
        lastName: "Prioa",
        age: 1
      }

      const createdUser = await UserRepository.createRecord(user)
      expect(createdUser).toEqual(user)
    })
  })

  describe("getRecord", () => {
    let user: User
    let userDetails = {
      firstName: "Rosie",
      lastName: "Kirby",
      age: 3
    }

    beforeEach(async () => {
      user = await UserRepository.createRecord(userDetails)
    })

    describe("an id for a previously created user", () => {
      it("finds the user by id", async () => {
        const foundUser = await UserRepository.getRecord(user.id)

        expect(foundUser).toEqual(user)
      })
    })

    describe("an id that does not exist", () => {
      it("returns an empty response", async () => {
        let userId = 45

        const foundUser = await UserRepository.getRecord(userId)

        expect(foundUser).toEqual(null)
      })
    })
  })

  describe.only("updateRecord", () => {
    let user: User
    let userDetails = {
      firstName: "Rosie",
      lastName: "Kirby",
      age: 3
    }

    beforeEach(async () => {
      user = await UserRepository.createRecord(userDetails)
    })

    describe("one attribute is updated", () => {
      it("gets all user records", async () => {
        const updatedDetails = { firstName: "RoRo" }

        const updatedUser = await UserRepository.updateRecord(
          user.id,
          updatedDetails
        )

        expect(updatedUser?.firstName).toEqual(updatedDetails.firstName)
      })

      it("does not update the id", async () => {
        const updatedDetails = { id: 45, firstName: "RoRo" }

        const updatedUser = await UserRepository.updateRecord(
          user.id,
          updatedDetails
        )

        expect(updatedUser).toEqual("i don't know")
      })
    })

    describe("all attributes are updated", () => {
      it("updates all attributes", async () => {
        const updatedDetails = { firstName: "RoRo", lastName: "Kir", age: 100 }

        const updatedUser = await UserRepository.updateRecord(
          user.id,
          updatedDetails
        )

        expect(updatedUser).toEqual(updatedDetails)
      })
    })

    describe("an invalid attribute is updated", () => {
      it("returns an error message", async () => {
        const updatedDetails = { fakeAttribute: "RoRo" }

        const updatedUser = await UserRepository.updateRecord(
          user.id,
          updatedDetails
        )

        expect(updatedUser).toEqual(updatedDetails)
      })
    })
  })
})
