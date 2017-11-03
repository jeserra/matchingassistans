import {Router, Request, Response, NextFunction} from 'express';

import { Tutor } from "../Models/customer";


export class TutorRouter {
  router: Router

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

    public getOne(req: Request, res: Response, next: NextFunction) {
    //let query = parseInt(req.params.id);
    let tutor:Tutor;

 	tutor = new Tutor("Marius");
 	tutor.id = req.params.id;
 	tutor.address ="Boulevard de las palomas, 55 centro";

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

// Create the HeroRouter, and export its configured Express.Router
const tutorRoutes = new TutorRouter();
tutorRoutes.init();

export default tutorRoutes.router;