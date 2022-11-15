import { Sequelize } from 'sequelize';
import { DBNAME } from './constants';
import { DBUSER } from './constants';
import { DBPASSWORD } from './constants';

export const sequelize = new Sequelize(DBNAME, DBUSER, DBPASSWORD, {
    host: 'localhost',
    port: 8889,
    dialect: 'mysql'
});

