import dotenv from "dotenv";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Banker } from "../entities/banker";
import { User } from "../entities/clint";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DB_URL,
  synchronize: true, // Set to false in production
  logging: false,
  entities: [User, Banker],
  migrations: ["src/migrations/**/*.ts"],
});
