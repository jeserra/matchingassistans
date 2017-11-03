import {Router, Request, Response, NextFunction} from 'express';
const Associates = require('../asociados2.json');


export class AssociatedRouter {
  router: Router

  /**
   * Initialize the AssociatesRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Associates.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send(Associates);
  }

  /**
 * GET one associate by id
 */
  public getOne(req: Request, res: Response, next: NextFunction) {
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

// Create the AssociatedRouter, and export its configured Express.Router
const associateRoutes = new AssociatedRouter();
associateRoutes.init();

export default associateRoutes.router;