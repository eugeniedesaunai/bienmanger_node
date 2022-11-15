"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const Recette_1 = require("./Recette");
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Image extends sequelize_1.Model {
}
exports.Image = Image;
Image.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        validate: {
            isInt: true,
        }
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    texte_alternatif: {
        type: sequelize_1.DataTypes.STRING(400),
        allowNull: true,
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
