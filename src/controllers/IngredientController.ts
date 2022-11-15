import { Ingredient } from './../model/Ingredient';
import { sequelize } from './../config/database';
import { CrudController } from "./CrudController";
import { Request, Response } from 'express';

export class IngredientController extends CrudController {
    public read(req: Request, res: Response): void {
        Ingredient.findAll().then(ingredients => res.json(ingredients));

    }
    public voirIngredient(req: Request, res: Response): void {
        //Recette.findAll({ where: { id: req.params.id } }).then(recette => res.json(recette));
        //Recette.findByPk(req.params.id).then(recette => res.json(recette));
        Ingredient.findOne({ where: { id: req.params.id } }).then(ingredient => res.json(ingredient));
        // le then est une promesse qui renvois la réponse demandé 
    }

    public create(req: Request, res: Response): void {
        Ingredient.create({
            "id": req.body.id,
            "nom": req.body.nom,
        }).then(ingredient => res.json(ingredient));
    }

    public delete(req: Request, res: Response): void {
        Ingredient.destroy({
            where: { id: req.params.id }
        }).then(ingredient => res.json(ingredient));
    }

    public update(req: Request, res: Response): void {
        Ingredient.update({
            "id": req.body.id,
            "nom": req.body.nom,
        }, { where: { id: req.params.id } }).then(ingredient => res.json(ingredient));
    }
}
