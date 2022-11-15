import { Recette } from './Recette';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class Etape extends Model {
    public id!: number;
    public contenu!: string;
    public recette_id!: number;
}

Etape.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        validate: {
            isInt: true,
        }
    },
    contenu: {
        type: DataTypes.TEXT,
        allowNull: false,
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