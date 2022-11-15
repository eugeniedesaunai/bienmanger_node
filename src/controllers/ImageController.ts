import { sequelize } from './../config/database';
import { CrudController } from "./CrudController";
import { Request, Response } from 'express';
import { Image } from '../model/Image';




export class ImageController extends CrudController {
    public read(req: Request, res: Response): void {
        Image.findAll().then(image => res.json(image));

    }
    public voirImage(req: Request, res: Response): void {
        //Recette.findAll({ where: { id: req.params.id } }).then(recette => res.json(recette));
        //Recette.findByPk(req.params.id).then(recette => res.json(recette));
        Image.findOne({ where: { id: req.params.id } }).then(image => res.json(image));
        // le then est une promesse qui renvois la réponse demandé 
    }

    public create(req: Request, res: Response): void {
        Image.create({
            "id": req.body.id,
            "url": req.body.url,
            "texte_alternatif": req.body.texte_alternatif,
            "recette_id": req.body.recette_id,
        }).then(image => res.json(image));
    }

    public delete(req: Request, res: Response): void {
        Image.destroy({
            where: { id: req.params.id }
        }).then(image => res.json(image));
    }

    public update(req: Request, res: Response): void {
        Image.update({
            "id": req.body.id,
            "url": req.body.url,
            "texte_alternatif": req.body.texte_alternatif,
            "recette_id": req.body.recette_id,
        }, { where: { id: req.params.id } }).then(image => res.json(image));
    }
}
