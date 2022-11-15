"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingredient = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Ingredient extends sequelize_1.Model {
}
exports.Ingredient = Ingredient;
Ingredient.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        validate: {
            isInt: true,
        }
    },
    nom: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        validate: {
            isAlpha: true,
        }
    },
}, {
    sequelize: database_1.sequelize,
    timestamps: false,
});
