import { Utilisateur } from './../model/Utilisateur';
import { Request, Response } from "express";
import { CrudController } from "./CrudController";
import status from 'http-status';
import { hash, compare } from "bcrypt";
import { BCRYPT_ROUND } from "../config/constants";
import { generateToken } from "../authenticate/jwt";
import { Permission } from "../model/Permission";

export class AuthenticateController extends CrudController {

    // Inscription d'un user
    public signin(req: Request, res: Response): void {
        let utilisateur = req.body;


        hash(utilisateur.mdp, BCRYPT_ROUND).then(hashPassord => {
            utilisateur.mdp = hashPassord;

            /**
             * user = {
             *  "firstname":"stephane",
             *  "lastname" : "pau",²
             *  "mail" : "stephane.pau@smartmoov.solutions",
             *  "password" : "$2b$14$g9qWHRXdE8JTpyEsHiGiSOQifIacSpgngP6i8HO8MnAT0y0mPMEBW",
             *  "idpermission" : 2 //<-- ne sera pas pris en compte si on spécifie le paramètre fields
             * }
             */
            // Le paramètre fields indique les champs qui sont attendus pour la création de l'élément en BDD
            // Avec le paramètre fields, si idpermission est transmis, il ne sera pas pris en compte
            // Il prendra la valeur par défaut spécifié en BDD. C'est un élément de sécurité
            // Les champs auto-générés (PK en AUTO_INCREMENT) n'ont pas besoin d'être présent dans le champ fields
            Utilisateur.create(utilisateur, { fields: ['prenom', 'nom', 'mdp', 'mail'] }).
                then(
                    utilisateur => res.status(status.OK).json(utilisateur)
                ).catch(
                    (err: Error) => { console.log(err); res.status(status.BAD_REQUEST).json(err); }
                );
        });
    }

    public async login(req: Request, res: Response): Promise<void> {

        const plainPassword = req.body.mdp;
        const mail = req.body.mail;

        const user = await Utilisateur.findOne({ where: { mail: mail } });
        console.log(user!.nom);
        if (user === null) {
            res.status(status.UNAUTHORIZED).json('Invalid credentials');
            return;
        }

        const bMatch = await compare(plainPassword, user.mdp);
        if (!bMatch) {
            res.status(status.UNAUTHORIZED).json('Invalid credentials');
            return;
        }

        const permission = await Permission.findByPk(user.permission_id);
        if (permission === null) {
            res.status(status.UNAUTHORIZED).json('Invalid credentials');
            return;
        }
        res.status(status.OK).json({ 'token': generateToken(/* user.nom, user.mail, permission.role */) });
    }
}