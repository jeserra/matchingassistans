"use strict";
const express_1 = require('express');
const customer_1 = require("../Models/customer");
class TutorRouter {
    /**
     * Initialize the HeroRouter
     */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    getOne(req, res, next) {
        //let query = parseInt(req.params.id);
        let tutor;
        tutor = new customer_1.Tutor("Marius");
        tutor.id = req.params.id;
        tutor.address = "Boulevard de las palomas, 55 centro";
        console.log(tutor);
        if (tutor) {
            res.status(200)
                .send({
                message: 'Success',
                status: res.status,
                tutor
            });
        }
        else {
            res.status(404)
                .send({
                message: 'No tutor found with the given id.',
                status: res.status
            });
        }
    }
    init() {
        this.router.get('/:id', this.getOne);
    }
}
exports.TutorRouter = TutorRouter;
// Create the HeroRouter, and export its configured Express.Router
const tutorRoutes = new TutorRouter();
tutorRoutes.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorRoutes.router;
