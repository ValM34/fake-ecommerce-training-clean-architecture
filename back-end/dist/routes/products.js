"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const connect_1 = require("../db/connect");
router.get('/', (req, res) => {
    (0, connect_1.connect)();
    res.send('Hello Products!');
});
exports.default = router;
