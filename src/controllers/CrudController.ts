import { Request, Response } from 'express';

export abstract class CrudController {
    create(req: Request, res: Response): void {
        throw new Error("la méthode create n'est pas implémenté")
    };
    read(req: Request, res: Response): void {
        throw new Error("la méthode read n'est pas implémenté")
    };
    update(req: Request, res: Response): void {
        throw new Error("la méthode update n'est pas implémenté")
    };
    delete(req: Request, res: Response): void {
        throw new Error("la méthode delete n'est pas implémenté")
    };
    // si dans les class dérivée on n'appelle pas une de ces méthodes 
    // ce message sera envoyé 

}