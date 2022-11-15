"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const jwt_1 = require("../authenticate/jwt");
/**
 * middleware to check whether user has access to a specific endpoint
 *
 * @param allowedAccessTypes list of allowed access types of a specific endpoint
 */
const authorize = (allowedAccessTypes) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
        const decodedToken = yield (0, jwt_1.validateToken)(jwt);
        const hasAccessToEndpoint = allowedAccessTypes.some((at) => decodedToken.accessTypes.some((uat) => uat === at));
        // Si pas d'autorisation d'accès à l'API, on sort
        if (!hasAccessToEndpoint) {
            return res.status(401).json({ message: 'No enough privileges to access endpoint' });
        }
        // Appel à un éventuel autre middleware. C'est géré par Express
        next();
    }
    catch (error) {
        if (error.name === 'TokenExpiredError') {
            res.status(401).json({ message: 'Expired token' });
            return;
        }
        res.status(500).json({ message: 'Failed to authenticate user' });
    }
});
exports.authorize = authorize;
