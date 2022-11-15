"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recette = void 0;
const Plat_1 = require("./Plat");
const Saison_1 = require("./Saison");
const Utilisateur_1 = require("./Utilisateur");
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Recette extends sequelize_1.Model {
}
exports.Recette = Recette;
Recette.init({
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
    slug: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isAlphanumeric: true,
        }
    },
    description: {
        type: sequelize_1.DataTypes.STRING(400),
        allowNull: true,
        validate: {
            isAlphanumeric: true,
        }
    },
    nb_convices: {
        type: sequelize_1.DataTypes.NUMBER,
        validate: {
            isNumeric: true,
        }
    },
    plat_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Plat_1.Plat,
            key: 'id',
        },
        validate: {
            isInt: true,
        }
    },
    saison_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Saison_1.Saison,
            key: 'id',
        },
        validate: {
            isInt: true,
        }
    },
    utilisateur_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Utilisateur_1.Utilisateur,
            key: 'id',
        },
        validate: {
            isInt: true,
        }
    }
}, {
    sequelize: database_1.sequelize,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
});
Recette.belongsTo(Plat_1.Plat, { foreignKey: "plat_id" });
Recette.belongsTo(Saison_1.Saison, { foreignKey: "saison_id" });
