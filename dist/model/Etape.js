"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Etape = void 0;
const Recette_1 = require("./Recette");
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Etape extends sequelize_1.Model {
}
exports.Etape = Etape;
Etape.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        validate: {
            isInt: true,
        }
    },
    contenu: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        validate: {
            isAlphanumeric: true,
        }
    },
    recette_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Recette_1.Recette,
            key: 'id',
        },
        validate: {
            isInt: true,
        }
    }
}, {
    sequelize: database_1.sequelize,
    timestamps: false,
});
