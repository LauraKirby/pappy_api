import app from "./app"
import { AppDataSource } from "./infrastructure/database/data-source"

// Initialize database and start web server
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")

    console.log("Starting server on port: ", process.env.PORT)
    app.listen(process.env.PORT)
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })
