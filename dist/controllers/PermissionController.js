"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionController = void 0;
const CrudController_1 = require("./CrudController");
const Permission_1 = require("../model/Permission");
class PermissionController extends CrudController_1.CrudController {
    read(req, res) {
        Permission_1.Permission.findAll().then(permissions => res.json(permissions));
    }
    voirPermission(req, res) {
        //Recette.findAll({ where: { id: req.params.id } }).then(recette => res.json(recette));
        //Recette.findByPk(req.params.id).then(recette => res.json(recette));
        Permission_1.Permission.findOne({ where: { id: req.params.id } }).then(permission => res.json(permission));
        // le then est une promesse qui renvois la réponse demandé 
    }
    create(req, res) {
        Permission_1.Permission.create({
            "id": req.body.id,
            "role": req.body.role,
        }).then(permission => res.json(permission));
    }
    delete(req, res) {
        Permission_1.Permission.destroy({
            where: { id: req.params.id }
        }).then(permission => res.json(permission));
    }
    update(req, res) {
        Permission_1.Permission.update({
            "id": req.body.id,
            "role": req.body.role,
        }, { where: { id: req.params.id } }).then(permission => res.json(permission));
    }
}
exports.PermissionController = PermissionController;
