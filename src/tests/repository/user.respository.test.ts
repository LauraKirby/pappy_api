import { DataSource } from "typeorm"
import { AppDataSource } from "../../infrastructure/database/data-source"
import * as UserRepository from "../../repository/user.repository"

describe("UserRepository", () => {
  let myDB: DataSource
  beforeAll(async () => {
    console.log("process.env.NODE_ENV:", process.env.NODE_ENV)
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

  describe("createRecord", () => {
    it("creates a user", async () => {
      const user = {
        firstName: "Mel",
        lastName: "Prioa",
        age: 3
      }

      const createdUser = await UserRepository.createRecord(user)
      console.log("createdUser: ", createdUser)
      expect(createdUser).toEqual(user)
    })
  })

  describe("getRecord", () => {
    it("gets all user records", async () => {
      const user = {
        firstName: "Rosie",
        lastName: "Kirby",
        age: 3
      }

      await UserRepository.createRecord(user)
      await UserRepository.createRecord(user)

      const users = await UserRepository.all()

      expect(users).toBe(2)
    })
  })
})
