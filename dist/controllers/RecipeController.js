"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeController = void 0;
const Plat_1 = require("./../model/Plat");
const Saison_1 = require("./../model/Saison");
const CrudController_1 = require("./CrudController");
const Recette_1 = require("../model/Recette");
class RecipeController extends CrudController_1.CrudController {
    read(req, res) {
        Recette_1.Recette.findAll().then(recettes => res.json(recettes));
    }
    voirRecette(req, res) {
        //Recette.findAll({ where: { id: req.params.id } }).then(recette => res.json(recette));
        //Recette.findByPk(req.params.id).then(recette => res.json(recette));
        Recette_1.Recette.findOne({ where: { id: req.params.id }, include: [Plat_1.Plat, Saison_1.Saison] }).then(recette => res.json(recette));
        // le then est une promesse qui renvois la réponse demandé 
        // Le include permet de ne pas faire du lazy loading mais du Eager loading ce qui permet d'avoir tout
        //les éléments côté front et de facilité l'intégration
    }
    create(req, res) {
        Recette_1.Recette.create({
            "id": req.body.id,
            "nom": req.body.nom,
            "slug": req.body.slug,
            "nb_convices": req.body.nb_convices,
            "description": req.body.description,
            "plat_id": req.body.plat_id,
            "saison_id": req.body.saison_id,
            "utilisateur_id": req.body.utilisateur_id,
        }).then(recette => res.json(recette));
    }
    delete(req, res) {
        Recette_1.Recette.destroy({
            where: { id: req.params.id }
        }).then(recette => res.json(recette));
    }
    update(req, res) {
        Recette_1.Recette.update({
            "id": req.body.id,
            "nom": req.body.nom,
            "slug": req.body.slug,
            "nb_convices": req.body.nb_convices,
            "description": req.body.description,
            "plat_id": req.body.plat_id,
            "saison_id": req.body.saison_id,
            "utilisateur_id": req.body.utilisateur_id
        }, { where: { id: req.params.id } }).then(recette => res.json(recette));
    }
}
exports.RecipeController = RecipeController;
