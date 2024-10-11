import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import dotenv from 'dotenv';
dotenv.config();

type DatabaseDialect = 'mysql' | 'postgres' | 'sqlite'; // add all possible values

export const AppDataSource = new DataSource({
    type: process.env.DATABASE_DIALECT as DatabaseDialect,
    host: process.env.HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
