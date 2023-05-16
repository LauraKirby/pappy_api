import { AppDataSource } from "../infrastructure/database/data-source"

export default async () => {
  await AppDataSource.initialize()
  await AppDataSource.runMigrations()
}
