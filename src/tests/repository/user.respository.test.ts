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
})
