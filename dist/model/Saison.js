"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Saison = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Saison extends sequelize_1.Model {
}
exports.Saison = Saison;
Saison.init({
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
        allowNull: true,
        validate: {
            isAlpha: true,
        }
    },
}, {
    sequelize: database_1.sequelize,
    timestamps: false,
});
