import { sequelize } from './../config/database';
import { CrudController } from "./CrudController";
import { Request, Response } from 'express';
import { Etape } from '../model/Etape';



export class EtapeController extends CrudController {
    public read(req: Request, res: Response): void {
        Etape.findAll().then(etapes => res.json(etapes));

    }
    public voirEtape(req: Request, res: Response): void {
        //Recette.findAll({ where: { id: req.params.id } }).then(recette => res.json(recette));
        //Recette.findByPk(req.params.id).then(recette => res.json(recette));
        Etape.findOne({ where: { id: req.params.id } }).then(etape => res.json(etape));
        // le then est une promesse qui renvois la réponse demandé 
    }

    public create(req: Request, res: Response): void {
        Etape.create({
            "id": req.body.id,
            "contenu": req.body.contenu,
            "recette_id": req.body.recette_id,
        }).then(etape => res.json(etape));
    }

    public delete(req: Request, res: Response): void {
        Etape.destroy({
            where: { id: req.params.id }
        }).then(etape => res.json(etape));
    }

    public update(req: Request, res: Response): void {
        Etape.update({
            "id": req.body.id,
            "contenu": req.body.contenu,
            "recette_id": req.body.recette_id,
        }, { where: { id: req.params.id } }).then(etape => res.json(etape));
    }
}

