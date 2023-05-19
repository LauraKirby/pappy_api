import * as dotenv from "dotenv"
import "reflect-metadata"
import { DataSource } from "typeorm"

// import { User } from '../../entity/user.entity'
if (process.env.NODE_ENV === "test") {
  dotenv.config({ path: ".env.test" })
} else {
  dotenv.config()
}

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dropSchema: true,
  synchronize: true,
  logging: true,
  entities: ["src/entity/*.ts"],
  migrations: ["src/infrastructure/database/migration/*.ts"],
  subscribers: []
})

// entities: ["../../entity/*.ts"],
