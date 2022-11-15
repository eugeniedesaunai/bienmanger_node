"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilisateurController = void 0;
const Utilisateur_1 = require("./../model/Utilisateur");
const CrudController_1 = require("./CrudController");
class UtilisateurController extends CrudController_1.CrudController {
    read(req, res) {
        Utilisateur_1.Utilisateur.findAll().then(utilisateurs => res.json(utilisateurs));
    }
    voirUtilisateur(req, res) {
        Utilisateur_1.Utilisateur.findAll({ where: { id: req.params.id } }).then(utilisateur => res.json(utilisateur));
    }
    create(req, res) {
        Utilisateur_1.Utilisateur.create({
            "id": req.body.id,
            "nom": req.body.nom,
            "prenom": req.body.prenom,
            "mail": req.body.mail,
            "mdp": req.body.mdp,
            "permission_id": req.body.permission_id,
        }).then(utilisateur => res.json(utilisateur));
    }
    delete(req, res) {
        Utilisateur_1.Utilisateur.destroy({
            where: { id: req.params.id }
        }).then(utilisateur => res.json(utilisateur));
    }
    update(req, res) {
        Utilisateur_1.Utilisateur.update({
            "id": req.body.id,
            "nom": req.body.nom,
            "prenom": req.body.prenom,
            "mail": req.body.mail,
            "mdp": req.body.mdp,
            "permission_id": req.body.permission_id,
        }, { where: { id: req.params.id } }).then(utilisateur => res.json(utilisateur));
    }
}
exports.UtilisateurController = UtilisateurController;
