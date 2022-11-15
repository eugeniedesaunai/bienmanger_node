import express from 'express';
import { AuthenticateController } from '../controllers/AuthenticateController';


const authenticateController = new AuthenticateController();

export const router = express.Router({
    strict: true
});


router.route('/enregistrer').post(authenticateController.signin);
router.route('/login').post(authenticateController.login);