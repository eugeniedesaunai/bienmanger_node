"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Permission extends sequelize_1.Model {
}
exports.Permission = Permission;
Permission.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        validate: {
            isInt: true,
        }
    },
    role: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        validate: {
            isAlphanumeric: true,
        }
    },
}, {
    sequelize: database_1.sequelize,
    timestamps: false,
});
