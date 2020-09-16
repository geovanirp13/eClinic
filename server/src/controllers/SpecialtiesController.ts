import { Request, Response } from 'express';
import knex from '../database/connection';

class SpecialtiesController {
  async index(request: Request, response: Response) {
    const specialties = await knex('specialties').select('*');
  
    const serializedSpecialties = specialties.map(specialtie => {
      return {
        id: specialtie.id,
        title: specialtie.title,
        image_url: `http://localhost:3333/uploads/${specialtie.image}`,
      };
    });
  
    return response.json(serializedSpecialties);
  }
}

export default SpecialtiesController;