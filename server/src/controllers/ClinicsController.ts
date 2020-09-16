import { Request, Response } from 'express';
import knex from '../database/connection';

class ClinicsController {
  async index(request: Request, response: Response) {
    const { city, uf, specialties } = request.query;

    const parsedSpecialties = String(specialties)
      .split(',')
      .map(specialtie => Number(specialtie.trim()));

    const clinics = await knex('clinics')
      .join('clinic_specialties', 'clinics.id', '=', 'clinic_specialties.clinic_id')
      .whereIn('clinic_specialties.specialties_id', parsedSpecialties)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('clinics.*');

    return response.json(clinics);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const clinic = await knex('clinics').where('id', id).first();

    if (!clinic) {
      return response.status(400).json({ message: 'Clinic not found' });
    }

    const specialties = await knex('specialties')
      .join('clinic_specialties', 'specialties.id', '=', 'clinic_specialties.specialties_id')
      .where('clinic_specialties.clinic_id', id)
      .select('specialties.title');

    return response.json({ clinic, specialties });
  }

  async create(request: Request, response: Response) {
    const {
      name,
      cnpj,
      email,
      whatsapp,
      phone,
      latitude,
      longitude,
      city,
      uf,
      specialties
    } = request.body;
  
    const trx = await knex.transaction();

    const clinic = {
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      name,
      cnpj,
      email,
      whatsapp,
      phone,
      latitude,
      longitude,
      city,
      uf
    }
  
    const insertedIds = await trx('clinics').insert(clinic);
  
    const clinic_id = insertedIds[0];
  
    const clinicSpecialties = specialties.map((specialties_id: number) => {
      return {
        specialties_id,
        clinic_id,
      };
    })
  
    await trx('clinic_specialties').insert(clinicSpecialties);
  
    await trx.commit();
  
    return response.json({
      id: clinic_id,
      ...clinic,
    });
  }
}

export default ClinicsController;