import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('specialties').insert([
    { title: 'Cardiologia', image: 'cardiologia.svg'},
    { title: 'Gastroenterologia', image: 'gastro.svg'},
    { title: 'Ginecologia', image: 'ginecologia.svg'},
    { title: 'Neurologia', image: 'neurologia.svg'},
    { title: 'Odontologia', image: 'odontologia.svg'},
    { title: 'Oftalmologia', image: 'oftalmo.svg'},
  ]);
}