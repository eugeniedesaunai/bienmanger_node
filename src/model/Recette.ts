import { Plat } from './Plat';
import { Saison } from './Saison';
import { Utilisateur } from './Utilisateur';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class Recette extends Model {
    declare id: number;
    declare name: string;
    declare slug: string;
    declare nb_convices: number;
    declare description: string;
    declare plat_id: number;
    declare saison_id: number;
    declare utilisateur_id: number;
}

Recette.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        validate: {
            isInt: true,
        }
    },
    nom: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            isAlpha: true,
        }
    },

    slug: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isAlphanumeric: true,
        }
    },

    description: {
        type: DataTypes.STRING(400),
        allowNull: true,
        validate: {
            isAlphanumeric: true,
        }
    },

    nb_convices: {
        type: DataTypes.NUMBER,
        validate: {
            isNumeric: true,
        }
    },

    plat_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Plat,
            key: 'id',
        },
        validate: {
            isInt: true,
        }

    },
    saison_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Saison,
            key: 'id',
        },
        validate: {
            isInt: true,
        }
    },
    utilisateur_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Utilisateur,
            key: 'id',
        },
        validate: {
            isInt: true,
        }
    }
},
    {
        sequelize,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

Recette.belongsTo(Plat, { foreignKey: "plat_id" });
Recette.belongsTo(Saison, { foreignKey: "saison_id" });
