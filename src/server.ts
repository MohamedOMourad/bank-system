import { config } from "dotenv";
import app from "./app";
import { AppDataSource } from "./database/data-source";
config();
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(process.env.PORT || "8000", () =>
      console.log(`Server running on port ${process.env.PORT || "8000"}`)
    );
  })
  .catch((err) => console.error("Database connection failed", err));
