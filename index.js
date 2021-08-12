require('dotenv').config();

const express = require('express');
const cors = require('cors');

const {dbConnection}=require('./database/config');

// Crear el servidor express
const app = express();

// Configurar cors
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

// Bases de datos
dbConnection();

//Directorio público
app.use(express.static('public'));

// Rutas
app.use('/api/usuarios',require('./routes/usuarios'));
app.use('/api/login',require('./routes/auth'));
app.use('/api/hospitales',require('./routes/carreras'));
app.use('/api/todo',require('./routes/busquedas'));
app.use('/api/medicos',require('./routes/corredores'));
app.use('/api/upload',require('./routes/uploads'));




app.listen(process.env.PORT,()=>{


 console.log('Servidor corriendo en puerto:' + process.env.PORT);

})