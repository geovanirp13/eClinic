import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('clinics', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('name', 100).notNullable();
    table.string('cnpj', 14).notNullable();
    table.string('email', 150).notNullable();
    table.string('whatsapp', 11).notNullable();
    table.string('phone', 10).notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.string('city', 100).notNullable();
    table.string('uf', 2).notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('clinics');
}