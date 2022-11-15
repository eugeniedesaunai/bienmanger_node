import { sequelize } from './../config/database';
import { CrudController } from "./CrudController";
import { Request, Response } from 'express';
import { Saison } from '../model/Saison';

export class SaisonController extends CrudController {
    public read(req: Request, res: Response): void {
        Saison.findAll().then(saisons => res.json(saisons));

    }
    public voirSaison(req: Request, res: Response): void {
        //Recette.findAll({ where: { id: req.params.id } }).then(recette => res.json(recette));
        //Recette.findByPk(req.params.id).then(recette => res.json(recette));
        Saison.findOne({ where: { id: req.params.id } }).then(saison => res.json(saison));
        // le then est une promesse qui renvois la réponse demandé 
    }

    public create(req: Request, res: Response): void {
        Saison.create({
            "id": req.body.id,
            "nom": req.body.nom,
        }).then(ingredient => res.json(ingredient));
    }

    public delete(req: Request, res: Response): void {
        Saison.destroy({
            where: { id: req.params.id }
        }).then(saison => res.json(saison));
    }

    public update(req: Request, res: Response): void {
        Saison.update({
            "id": req.body.id,
            "nom": req.body.nom,
        }, { where: { id: req.params.id } }).then(saison => res.json(saison));
    }
}
