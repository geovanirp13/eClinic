import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('clinic_specialties', table => {
    table.increments('id').primary();

    table.integer('clinic_id')
      .notNullable()
      .references('id')
      .inTable('clinics');

    table.string('specialties_id')
      .notNullable()
      .references('id')
      .inTable('specialties');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('clinic_specialties');
}