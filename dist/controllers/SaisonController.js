"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaisonController = void 0;
const CrudController_1 = require("./CrudController");
const Saison_1 = require("../model/Saison");
class SaisonController extends CrudController_1.CrudController {
    read(req, res) {
        Saison_1.Saison.findAll().then(saisons => res.json(saisons));
    }
    voirSaison(req, res) {
        //Recette.findAll({ where: { id: req.params.id } }).then(recette => res.json(recette));
        //Recette.findByPk(req.params.id).then(recette => res.json(recette));
        Saison_1.Saison.findOne({ where: { id: req.params.id } }).then(saison => res.json(saison));
        // le then est une promesse qui renvois la réponse demandé 
    }
    create(req, res) {
        Saison_1.Saison.create({
            "id": req.body.id,
            "nom": req.body.nom,
        }).then(ingredient => res.json(ingredient));
    }
    delete(req, res) {
        Saison_1.Saison.destroy({
            where: { id: req.params.id }
        }).then(saison => res.json(saison));
    }
    update(req, res) {
        Saison_1.Saison.update({
            "id": req.body.id,
            "nom": req.body.nom,
        }, { where: { id: req.params.id } }).then(saison => res.json(saison));
    }
}
exports.SaisonController = SaisonController;
