"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize(`${process.env.DATABASE_DIALECT}://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`);
