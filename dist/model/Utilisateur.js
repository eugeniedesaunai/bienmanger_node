"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utilisateur = void 0;
const Permission_1 = require("./Permission");
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Utilisateur extends sequelize_1.Model {
}
exports.Utilisateur = Utilisateur;
Utilisateur.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        validate: {
            isInt: true,
        }
    },
    nom: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
        validate: {
            isAlpha: true,
        }
    },
    prenom: {
        type: sequelize_1.DataTypes.STRING(39),
        allowNull: true,
        validate: {
            isAlpha: true,
        }
    },
    mail: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    mdp: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    permission_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Permission_1.Permission,
            key: 'id',
        },
        validate: {
            isInt: true,
        },
    }
}, {
    sequelize: database_1.sequelize,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
});
