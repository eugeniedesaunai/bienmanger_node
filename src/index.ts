import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { PORT } from './config/constants';
import { router } from './routes/Recipe';
import { router as routerIngredient } from './routes/Ingredient';
import { router as routerUtilisateur } from './routes/Utilisateur';
import { router as routerPlat } from './routes/Plat';
import { router as routerSaison } from './routes/Saison';
import { router as routerPermission } from './routes/Permission';
import { router as routerEtape } from './routes/Etape';
import { router as routerImage } from './routes/Image';
import { router as authenticateRouter } from './routes/AuthentificateRouter';
import path from 'path';
import { generateToken } from './authenticate/jwt';


const app = express();
const allowedOrigins = ['http://localhost:8000', '*']
const options: cors.CorsOptions = {
    origin: allowedOrigins
};
app.use(cors())
//app.use(cors());
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')));
console.log('Le token JWT:', generateToken());

//
// Recette OK
//
app.get('/recette', router);
app.get('/recette/voir/:id', router);
// ajouter une recette 
app.post('/recette/ajouter', router);
// supprimer une recettte
app.delete('/recette/supprimer/:id', router);
// MAJ Recette
app.post('/recette/maj/:id', router);

//
// Ingredient OK
//
app.get('/ingredient', routerIngredient);
app.get('/ingredient/voir/:id', routerIngredient);
// ajouter une recette 
app.post('/ingredient/ajouter', routerIngredient);
// supprimer une recettte
app.delete('/ingredient/supprimer/:id', routerIngredient);
// MAJ Recette
app.post('/ingredient/maj/:id', routerIngredient);

//
//Utilisateur OK
//
app.get('/utilisateurs', routerUtilisateur);
app.get('/utilisateur/voir/:id', routerUtilisateur);
// ajouter un Utilisateur 
app.post('/utilisateur/ajouter', routerUtilisateur);
// supprimer un Utilisateur
app.delete('/utilisateur/supprimer/:id', routerUtilisateur);
// MAJ Utilisateur
app.post('/utilisateur/maj/:id', routerUtilisateur);

//
// Plat OK
//
app.get('/plats', routerPlat);
app.get('/plat/voir/:id', routerPlat);
// ajouter une plat 
app.post('/plat/ajouter', routerPlat);
// supprimer une plat
app.delete('/plat/supprimer/:id', routerPlat);
// MAJ Plat
app.post('/plat/maj/:id', routerPlat);

//
// Saison OK
//
app.get('/saisons', routerSaison);
app.get('/saison/voir/:id', routerSaison);
// ajouter une Saison 
app.post('/saison/ajouter', routerSaison);
// supprimer une Saison
app.delete('/saison/supprimer/:id', routerSaison);
// MAJ Saison
app.post('/saison/maj/:id', routerSaison);


//
// Permission OK
//
app.get('/permissions', routerPermission);
app.get('/permission/voir/:id', routerPermission);
// ajouter une Permission 
app.post('/permission/ajouter', routerPermission);
// supprimer une Permission
app.delete('/permission/supprimer/:id', routerPermission);
// MAJ Permission
app.post('/permission/maj/:id', routerPermission);


//
// Etape OK
//

app.post('/etapes', authenticateRouter);
app.get('/etape/voir/:id', routerEtape);


// ajouter une Etape 
app.post('/etape/ajouter', routerEtape);
// supprimer une Etape
app.delete('/etape/supprimer/:id', routerEtape);
// MAJ Etape
app.post('/etape/maj/:id', routerEtape);

//
// Image OK
//
app.get('/images', routerImage);
app.get('/image/voir/:id', routerImage);
// ajouter une Image 
app.post('/image/ajouter', routerImage);
// supprimer une Image
app.delete('/image/supprimer/:id', routerImage);
// MAJ Image
app.post('/image/maj/:id', routerImage);


app.post('/enregistrer', authenticateRouter);
app.post('/signin', authenticateRouter);
app.post('/etapes', authenticateRouter);
app.post('/login', authenticateRouter);



app.listen(PORT, () => {
    console.log(`Server is listenong on port ${PORT}`);

});


/*  function cors(): any {
    throw new Error('Function not implemented.');
}
 
 */