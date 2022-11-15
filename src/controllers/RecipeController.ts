import { Plat } from './../model/Plat';
import { Saison } from './../model/Saison';
import { sequelize } from './../config/database';
import { CrudController } from "./CrudController";
import { Request, Response } from 'express';
import { Recette } from '../model/Recette';


export class RecipeController extends CrudController {
    public read(req: Request, res: Response): void {
        Recette.findAll().then(recettes => res.json(recettes));

    }
    public voirRecette(req: Request, res: Response): void {
        //Recette.findAll({ where: { id: req.params.id } }).then(recette => res.json(recette));
        //Recette.findByPk(req.params.id).then(recette => res.json(recette));
        Recette.findOne({ where: { id: req.params.id }, include: [Plat, Saison] }).then(recette => res.json(recette));
        // le then est une promesse qui renvois la réponse demandé 
        // Le include permet de ne pas faire du lazy loading mais du Eager loading ce qui permet d'avoir tout
        //les éléments côté front et de facilité l'intégration
    }

    public create(req: Request, res: Response): void {
        Recette.create({
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

    public delete(req: Request, res: Response): void {
        Recette.destroy({
            where: { id: req.params.id }
        }).then(recette => res.json(recette));
    }

    public update(req: Request, res: Response): void {
        Recette.update({
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

