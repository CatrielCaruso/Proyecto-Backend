const mongoose = require('mongoose');

const dbConnection = async () => {

    try {

        await mongoose.connect(process.env.DB_CNN, {

            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false

        });

        console.log('Db online');
    } catch (error) {

        console.log(process.env.DB_CNN);
        throw new Error('Error al iniciar la base de datos')

    }







}



module.exports={


   dbConnection
}