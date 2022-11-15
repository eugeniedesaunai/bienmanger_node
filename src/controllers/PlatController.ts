import { Plat } from './../model/Plat';
import { sequelize } from './../config/database';
import { CrudController } from "./CrudController";
import { Request, Response } from 'express';


export class PlatController extends CrudController {
    public read(req: Request, res: Response): void {
        Plat.findAll().then(plat => res.json(plat));

    }
    public voirPlat(req: Request, res: Response): void {
        //Recette.findAll({ where: { id: req.params.id } }).then(recette => res.json(recette));
        //Recette.findByPk(req.params.id).then(recette => res.json(recette));
        Plat.findOne({ where: { id: req.params.id } }).then(plat => res.json(plat));
        // le then est une promesse qui renvois la réponse demandé 
    }

    public create(req: Request, res: Response): void {
        Plat.create({
            "id": req.body.id,
            "menu": req.body.menu,
        }).then(plat => res.json(plat));
    }

    public delete(req: Request, res: Response): void {
        Plat.destroy({
            where: { id: req.params.id }
        }).then(plat => res.json(plat));
    }

    public update(req: Request, res: Response): void {
        Plat.update({
            "id": req.body.id,
            "menu": req.body.menu,
        }, { where: { id: req.params.id } }).then(plat => res.json(plat));
    }
}
