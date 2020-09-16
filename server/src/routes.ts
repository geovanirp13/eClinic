import express from 'express';

import ClinicsController from './controllers/ClinicsController';
import SpecialtiesController from './controllers/SpecialtiesController';

const routes = express.Router();
const clinicsController = new ClinicsController();
const specialtiesController = new SpecialtiesController();

routes.get('/specialties', specialtiesController.index);

routes.post('/clinics', clinicsController.create);
routes.get('/clinics', clinicsController.index);
routes.get('/clinics/:id', clinicsController.show);


export default routes;