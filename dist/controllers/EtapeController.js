"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtapeController = void 0;
const CrudController_1 = require("./CrudController");
const Etape_1 = require("../model/Etape");
class EtapeController extends CrudController_1.CrudController {
    read(req, res) {
        Etape_1.Etape.findAll().then(etapes => res.json(etapes));
    }
    voirEtape(req, res) {
        //Recette.findAll({ where: { id: req.params.id } }).then(recette => res.json(recette));
        //Recette.findByPk(req.params.id).then(recette => res.json(recette));
        Etape_1.Etape.findOne({ where: { id: req.params.id } }).then(etape => res.json(etape));
        // le then est une promesse qui renvois la réponse demandé 
    }
    create(req, res) {
        Etape_1.Etape.create({
            "id": req.body.id,
            "contenu": req.body.contenu,
            "recette_id": req.body.recette_id,
        }).then(etape => res.json(etape));
    }
    delete(req, res) {
        Etape_1.Etape.destroy({
            where: { id: req.params.id }
        }).then(etape => res.json(etape));
    }
    update(req, res) {
        Etape_1.Etape.update({
            "id": req.body.id,
            "contenu": req.body.contenu,
            "recette_id": req.body.recette_id,
        }, { where: { id: req.params.id } }).then(etape => res.json(etape));
    }
}
exports.EtapeController = EtapeController;
