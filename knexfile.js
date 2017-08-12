const dotenv = require("dotenv");
dotenv.config();

module.exports = {

  development: {
    client: "mysql",
    connection: {
      database : process.env.MYSQL_DATABASE_NAME,
      host : process.env.MYSQL_DATABASE_HOST,
      password : process.env.MYSQL_DATABASE_PASSWORD,
      user : process.env.MYSQL_DATABASE_USER,
    },
  },

  staging: {
    client: "mysql",
    connection: {
      database : process.env.MYSQL_DATABASE_NAME,
      host : process.env.MYSQL_DATABASE_HOST,
      password : process.env.MYSQL_DATABASE_PASSWORD,
      user : process.env.MYSQL_DATABASE_USER,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "mysql",
    connection: {
      database : process.env.MYSQL_DATABASE_NAME,
      host : process.env.MYSQL_DATABASE_HOST,
      password : process.env.MYSQL_DATABASE_PASSWORD,
      user : process.env.MYSQL_DATABASE_USER,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
