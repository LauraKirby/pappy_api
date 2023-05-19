import * as dotenv from "dotenv"
import "reflect-metadata"
import { DataSource } from "typeorm"

if (process.env.NODE_ENV === "test") {
  dotenv.config({ path: ".env.test" })
} else {
  dotenv.config()
}
console.log("process.env.DB_SYNCHRONIZE: ", process.env.DB_SYNCHRONIZE)
console.log("process.env.DB_DROP_SCHEMA: ", process.env.DB_DROP_SCHEMA)

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dropSchema: process.env.DB_DROP_SCHEMA === "true",
  synchronize: process.env.DB_SYNCHRONIZE === "true",
  logging: true,
  entities: ["src/entity/*.ts"],
  migrations: ["src/infrastructure/database/migration/*.ts"],
  subscribers: []
})
