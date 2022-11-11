require('dotenv').config()
module.exports = {
  "development": {
    "url":process.env.URL_DB,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    url:process.env.URL_DB,
    "dialect": "postgres"
  }
}
