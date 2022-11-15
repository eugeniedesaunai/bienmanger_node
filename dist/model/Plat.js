"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plat = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Plat extends sequelize_1.Model {
}
exports.Plat = Plat;
Plat.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        validate: {
            isInt: true,
        }
    },
    menu: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true,
        validate: {
            isAlphanumeric: true,
        }
    },
}, {
    sequelize: database_1.sequelize,
    timestamps: false,
});
