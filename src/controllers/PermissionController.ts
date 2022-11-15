import { sequelize } from './../config/database';
import { CrudController } from "./CrudController";
import { Request, Response } from 'express';
import { Permission } from '../model/Permission';


export class PermissionController extends CrudController {
    public read(req: Request, res: Response): void {
        Permission.findAll().then(permissions => res.json(permissions));

    }
    public voirPermission(req: Request, res: Response): void {
        //Recette.findAll({ where: { id: req.params.id } }).then(recette => res.json(recette));
        //Recette.findByPk(req.params.id).then(recette => res.json(recette));
        Permission.findOne({ where: { id: req.params.id } }).then(permission => res.json(permission));
        // le then est une promesse qui renvois la réponse demandé 
    }

    public create(req: Request, res: Response): void {
        Permission.create({
            "id": req.body.id,
            "role": req.body.role,
        }).then(permission => res.json(permission));
    }

    public delete(req: Request, res: Response): void {
        Permission.destroy({
            where: { id: req.params.id }
        }).then(permission => res.json(permission));
    }

    public update(req: Request, res: Response): void {
        Permission.update({
            "id": req.body.id,
            "role": req.body.role,
        }, { where: { id: req.params.id } }).then(permission => res.json(permission));
    }
}
