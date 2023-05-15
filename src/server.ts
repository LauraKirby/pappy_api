import app from "./app"
import { AppDataSource } from "./infrastructure/database/data-source"

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")

    console.log("starting server")
    app.listen(3000)
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })
