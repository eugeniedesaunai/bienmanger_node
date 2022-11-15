import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class Ingredient extends Model {
    public id!: number;
    public nom!: string;
}

Ingredient.init({
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
},
    {
        sequelize,
        timestamps: false,
    }
);