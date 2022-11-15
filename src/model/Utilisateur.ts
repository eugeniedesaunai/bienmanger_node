import { Permission } from './Permission';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class Utilisateur extends Model {
    declare id: number;
    declare nom: string;
    declare prenom: string;
    declare mail: string;
    declare mdp: string;
    declare permission_id: number;
}

Utilisateur.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        validate: {
            isInt: true,
        }
    },
    nom: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            isAlpha: true,
        }
    },
    prenom: {
        type: DataTypes.STRING(39),
        allowNull: true,
        validate: {
            isAlpha: true,
        }
    },
    mail: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    mdp: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    permission_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Permission,
            key: 'id',
        },
        defaultValue: 1,
        validate: {
            isInt: true,
        },
    }
},
    {
        sequelize,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);