"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageController = void 0;
const CrudController_1 = require("./CrudController");
const Image_1 = require("../model/Image");
class ImageController extends CrudController_1.CrudController {
    read(req, res) {
        Image_1.Image.findAll().then(image => res.json(image));
    }
    voirImage(req, res) {
        //Recette.findAll({ where: { id: req.params.id } }).then(recette => res.json(recette));
        //Recette.findByPk(req.params.id).then(recette => res.json(recette));
        Image_1.Image.findOne({ where: { id: req.params.id } }).then(image => res.json(image));
        // le then est une promesse qui renvois la réponse demandé 
    }
    create(req, res) {
        Image_1.Image.create({
            "id": req.body.id,
            "url": req.body.url,
            "texte_alternatif": req.body.texte_alternatif,
            "recette_id": req.body.recette_id,
        }).then(image => res.json(image));
    }
    delete(req, res) {
        Image_1.Image.destroy({
            where: { id: req.params.id }
        }).then(image => res.json(image));
    }
    update(req, res) {
        Image_1.Image.update({
            "id": req.body.id,
            "url": req.body.url,
            "texte_alternatif": req.body.texte_alternatif,
            "recette_id": req.body.recette_id,
        }, { where: { id: req.params.id } }).then(image => res.json(image));
    }
}
exports.ImageController = ImageController;
