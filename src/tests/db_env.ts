import { AppDataSource } from "../infrastructure/database/data-source"

beforeAll(async () => {
  await AppDataSource.initialize()
})

afterAll(async () => {
  await AppDataSource.destroy()
})
