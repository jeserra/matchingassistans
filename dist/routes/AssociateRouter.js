"use strict";
const express_1 = require('express');
const Associates = require('../asociados2.json');
class AssociatedRouter {
    /**
     * Initialize the AssociatesRouter
     */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    /**
     * GET all Associates.
     */
    getAll(req, res, next) {
        res.send(Associates);
    }
    /**
   * GET one associate by id
   */
    getOne(req, res, next) {
        let query = parseInt(req.params.id);
        let associate = Associates.find(associate => associate.id === query);
        if (associate) {
            res.status(200)
                .send({
                message: 'Success',
                status: res.status,
                associate
            });
        }
        else {
            res.status(404)
                .send({
                message: 'No associate found with the given id.',
                status: res.status
            });
        }
    }
    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getOne);
    }
}
exports.AssociatedRouter = AssociatedRouter;
// Create the AssociatedRouter, and export its configured Express.Router
const associateRoutes = new AssociatedRouter();
associateRoutes.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = associateRoutes.router;
