"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const constants_1 = require("./constants");
const constants_2 = require("./constants");
const constants_3 = require("./constants");
exports.sequelize = new sequelize_1.Sequelize(constants_1.DBNAME, constants_2.DBUSER, constants_3.DBPASSWORD, {
    host: 'localhost',
    port: 8889,
    dialect: 'mysql'
});
