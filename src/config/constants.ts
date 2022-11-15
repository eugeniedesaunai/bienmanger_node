import process from "process";

export const PORT = process.env.PORT || 8000;
export const DBNAME = process.env.DBNAME || '';
export const DBUSER = process.env.DBUSER || '';
export const DBPASSWORD = process.env.DBPASSWORD || '';
export const BCRYPT_ROUND = process.env.BCRYPT_ROUND || 14;