"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatController = void 0;
const Plat_1 = require("./../model/Plat");
const CrudController_1 = require("./CrudController");
class PlatController extends CrudController_1.CrudController {
    read(req, res) {
        Plat_1.Plat.findAll().then(plat => res.json(plat));
    }
    voirPlat(req, res) {
        //Recette.findAll({ where: { id: req.params.id } }).then(recette => res.json(recette));
        //Recette.findByPk(req.params.id).then(recette => res.json(recette));
        Plat_1.Plat.findOne({ where: { id: req.params.id } }).then(plat => res.json(plat));
        // le then est une promesse qui renvois la réponse demandé 
    }
    create(req, res) {
        Plat_1.Plat.create({
            "id": req.body.id,
            "menu": req.body.menu,
        }).then(plat => res.json(plat));
    }
    delete(req, res) {
        Plat_1.Plat.destroy({
            where: { id: req.params.id }
        }).then(plat => res.json(plat));
    }
    update(req, res) {
        Plat_1.Plat.update({
            "id": req.body.id,
            "menu": req.body.menu,
        }, { where: { id: req.params.id } }).then(plat => res.json(plat));
    }
}
exports.PlatController = PlatController;
