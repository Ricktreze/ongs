const express = require('express');
const routes = require('./routes');
const cors = require('./cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);










/**tipos de parametros 
*
*
query paramans: parametros nomeados enviados na rota
*route paramns: parametros utilizados para buscar recursos
*Body request: Corpo da requisiçãi, utilizado para criar e alterar recursos
**/


/**
 * SQL:  MySql, SQLite, postgress 
 * Nosql: MongoDb, CounchDb, rtc
 * */

 /**
  * Driver: SELETC * FROM users
  * Query Builder: tabela(usuarios).select(*).where() 
  */