import { Recette } from './Recette';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class Image extends Model {
    declare id: number;
    declare url: string;
    declare texte_alternatif: string;
    declare recette_id: number;
}

Image.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        validate: {
            isInt: true,
        }
    },

    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    texte_alternatif: {
        type: DataTypes.STRING(400),
        allowNull: true,
        validate: {
            isAlphanumeric: true,
        }
    },

    recette_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Recette,
            key: 'id',
        },
        validate: {
            isInt: true,
        }
    }
},
    {
        sequelize,
        timestamps: false,
    }
);