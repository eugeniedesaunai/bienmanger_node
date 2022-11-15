import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class Saison extends Model {
    declare id: number;
    declare nom: string;
}

Saison.init({
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
        allowNull: true,
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