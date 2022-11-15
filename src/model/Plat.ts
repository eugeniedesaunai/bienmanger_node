import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class Plat extends Model {
    declare id: number;
    declare menu: string;
}

Plat.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        validate: {
            isInt: true,
        }
    },
    menu: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
            isAlphanumeric: true,
        }
    },
},
    {
        sequelize,
        timestamps: false,
    }
);