import { Request, Response, NextFunction } from 'express';
import { validateToken } from '../authenticate/jwt';

/**
 * middleware to check whether user has access to a specific endpoint
 *
 * @param allowedAccessTypes list of allowed access types of a specific endpoint
 */
export const authorize = (allowedAccessTypes: string[]) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        let jwt = req.headers.authorization;

        // verify request has token
        if (!jwt) {
            return res.status(401).json({ message: 'Invalid token ' });
        }

        // remove Bearer if using Bearer Authorization mechanism
        if (jwt.toLowerCase().startsWith('bearer')) {
            jwt = jwt.slice('bearer'.length).trim();
        }

        // On vérifie que le token est valide
        const decodedToken = await validateToken(jwt);

        const hasAccessToEndpoint = allowedAccessTypes.some(
            (at) => decodedToken.accessTypes.some((uat) => uat === at)
        );

        // Si pas d'autorisation d'accès à l'API, on sort
        if (!hasAccessToEndpoint) {
            return res.status(401).json({ message: 'No enough privileges to access endpoint' });
        }

        // Appel à un éventuel autre middleware. C'est géré par Express
        next();
    } catch (error: any) {
        if (error.name === 'TokenExpiredError') {
            res.status(401).json({ message: 'Expired token' });
            return;
        }

        res.status(500).json({ message: 'Failed to authenticate user' });
    }
};