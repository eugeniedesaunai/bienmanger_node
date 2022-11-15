"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const constants_1 = require("./config/constants");
const Recipe_1 = require("./routes/Recipe");
const Ingredient_1 = require("./routes/Ingredient");
const Utilisateur_1 = require("./routes/Utilisateur");
const Plat_1 = require("./routes/Plat");
const Saison_1 = require("./routes/Saison");
const Permission_1 = require("./routes/Permission");
const Etape_1 = require("./routes/Etape");
const Image_1 = require("./routes/Image");
const AuthentificateRouter_1 = require("./routes/AuthentificateRouter");
const path_1 = __importDefault(require("path"));
const jwt_1 = require("./authenticate/jwt");
const app = (0, express_1.default)();
const allowedOrigins = ['http://localhost:8000', '*'];
const options = {
    origin: allowedOrigins
};
app.use((0, cors_1.default)());
//app.use(cors());
app.use(express_1.default.json());
app.use('/static', express_1.default.static(path_1.default.join(__dirname, 'public')));
console.log('Le token JWT:', (0, jwt_1.generateToken)());
//
// Recette OK
//
app.get('/recette', Recipe_1.router);
app.get('/recette/voir/:id', Recipe_1.router);
// ajouter une recette 
app.post('/recette/ajouter', Recipe_1.router);
// supprimer une recettte
app.delete('/recette/supprimer/:id', Recipe_1.router);
// MAJ Recette
app.post('/recette/maj/:id', Recipe_1.router);
//
// Ingredient OK
//
app.get('/ingredient', Ingredient_1.router);
app.get('/ingredient/voir/:id', Ingredient_1.router);
// ajouter une recette 
app.post('/ingredient/ajouter', Ingredient_1.router);
// supprimer une recettte
app.delete('/ingredient/supprimer/:id', Ingredient_1.router);
// MAJ Recette
app.post('/ingredient/maj/:id', Ingredient_1.router);
//
//Utilisateur OK
//
app.get('/utilisateurs', Utilisateur_1.router);
app.get('/utilisateur/voir/:id', Utilisateur_1.router);
// ajouter un Utilisateur 
app.post('/utilisateur/ajouter', Utilisateur_1.router);
// supprimer un Utilisateur
app.delete('/utilisateur/supprimer/:id', Utilisateur_1.router);
// MAJ Utilisateur
app.post('/utilisateur/maj/:id', Utilisateur_1.router);
//
// Plat OK
//
app.get('/plats', Plat_1.router);
app.get('/plat/voir/:id', Plat_1.router);
// ajouter une plat 
app.post('/plat/ajouter', Plat_1.router);
// supprimer une plat
app.delete('/plat/supprimer/:id', Plat_1.router);
// MAJ Plat
app.post('/plat/maj/:id', Plat_1.router);
//
// Saison OK
//
app.get('/saisons', Saison_1.router);
app.get('/saison/voir/:id', Saison_1.router);
// ajouter une Saison 
app.post('/saison/ajouter', Saison_1.router);
// supprimer une Saison
app.delete('/saison/supprimer/:id', Saison_1.router);
// MAJ Saison
app.post('/saison/maj/:id', Saison_1.router);
//
// Permission OK
//
app.get('/permissions', Permission_1.router);
app.get('/permission/voir/:id', Permission_1.router);
// ajouter une Permission 
app.post('/permission/ajouter', Permission_1.router);
// supprimer une Permission
app.delete('/permission/supprimer/:id', Permission_1.router);
// MAJ Permission
app.post('/permission/maj/:id', Permission_1.router);
//
// Etape OK
//
app.post('/etapes', AuthentificateRouter_1.router);
app.get('/etape/voir/:id', Etape_1.router);
// ajouter une Etape 
app.post('/etape/ajouter', Etape_1.router);
// supprimer une Etape
app.delete('/etape/supprimer/:id', Etape_1.router);
// MAJ Etape
app.post('/etape/maj/:id', Etape_1.router);
//
// Image OK
//
app.get('/images', Image_1.router);
app.get('/image/voir/:id', Image_1.router);
// ajouter une Image 
app.post('/image/ajouter', Image_1.router);
// supprimer une Image
app.delete('/image/supprimer/:id', Image_1.router);
// MAJ Image
app.post('/image/maj/:id', Image_1.router);
app.post('/enregistrer', AuthentificateRouter_1.router);
app.post('/login', AuthentificateRouter_1.router);
app.listen(constants_1.PORT, () => {
    console.log(`Server is listenong on port ${constants_1.PORT}`);
});
/*  function cors(): any {
    throw new Error('Function not implemented.');
}
 
 */ 
