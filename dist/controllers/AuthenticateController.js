"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateController = void 0;
const Utilisateur_1 = require("./../model/Utilisateur");
const CrudController_1 = require("./CrudController");
const http_status_1 = __importDefault(require("http-status"));
const bcrypt_1 = require("bcrypt");
const constants_1 = require("../config/constants");
const jwt_1 = require("../authenticate/jwt");
const Permission_1 = require("../model/Permission");
class AuthenticateController extends CrudController_1.CrudController {
    // Inscription d'un user
    signin(req, res) {
        let utilisateur = req.body;
        (0, bcrypt_1.hash)(utilisateur.mdp, constants_1.BCRYPT_ROUND).then(hashPassord => {
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
            Utilisateur_1.Utilisateur.create(utilisateur, { fields: ['prenom', 'nom', 'mdp', 'mail'] }).
                then(utilisateur => res.status(http_status_1.default.OK).json(utilisateur)).catch((err) => { console.log(err); res.status(http_status_1.default.BAD_REQUEST).json(err); });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const plainPassword = req.body.mdp;
            const mail = req.body.mail;
            const user = yield Utilisateur_1.Utilisateur.findOne({ where: { mail: mail } });
            console.log(user.nom);
            if (user === null) {
                res.status(http_status_1.default.UNAUTHORIZED).json('Invalid credentials');
                return;
            }
            const bMatch = yield (0, bcrypt_1.compare)(plainPassword, user.mdp);
            if (!bMatch) {
                res.status(http_status_1.default.UNAUTHORIZED).json('Invalid credentials');
                return;
            }
            const permission = yield Permission_1.Permission.findByPk(user.permission_id);
            if (permission === null) {
                res.status(http_status_1.default.UNAUTHORIZED).json('Invalid credentials');
                return;
            }
            res.status(http_status_1.default.OK).json({ 'token': (0, jwt_1.generateToken)( /* user.nom, user.mail, permission.role */) });
        });
    }
}
exports.AuthenticateController = AuthenticateController;
