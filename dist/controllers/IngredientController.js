"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientController = void 0;
const Ingredient_1 = require("./../model/Ingredient");
const CrudController_1 = require("./CrudController");
class IngredientController extends CrudController_1.CrudController {
    read(req, res) {
        Ingredient_1.Ingredient.findAll().then(ingredients => res.json(ingredients));
    }
    voirIngredient(req, res) {
        //Recette.findAll({ where: { id: req.params.id } }).then(recette => res.json(recette));
        //Recette.findByPk(req.params.id).then(recette => res.json(recette));
        Ingredient_1.Ingredient.findOne({ where: { id: req.params.id } }).then(ingredient => res.json(ingredient));
        // le then est une promesse qui renvois la réponse demandé 
    }
    create(req, res) {
        Ingredient_1.Ingredient.create({
            "nom": req.body.nom,
        }).then(ingredient => res.json(ingredient));
    }
    delete(req, res) {
        Ingredient_1.Ingredient.destroy({
            where: { id: req.params.id }
        }).then(ingredient => res.json(ingredient));
    }
    update(req, res) {
        Ingredient_1.Ingredient.update({
            "id": req.body.id,
            "nom": req.body.nom,
        }, { where: { id: req.params.id } }).then(ingredient => res.json(ingredient));
    }
}
exports.IngredientController = IngredientController;
