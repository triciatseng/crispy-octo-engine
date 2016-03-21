import * as controller from '../api/carController';

import * as express from 'express'; //installed from npm, so no need for filepath
const router = express.Router();

//Base route -- /api/v1/cars
//
//GET: /api/v1/cars
router.get('/', controller.getAll);


export = router;
