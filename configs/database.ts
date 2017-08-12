import * as knex from "knex";

export const knexQuery = knex({
  client: "mysql",
  connection: {
    database : process.env.MYSQL_DATABASE_NAME,
    host : process.env.MYSQL_DATABASE_HOST,
    password : process.env.MYSQL_DATABASE_PASSWORD,
    user : process.env.MYSQL_DATABASE_USER,
  },
});
