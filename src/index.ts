import express from 'express'; //ESmodules

import userRouter from './controller/users'

const app = express();

app.use(express.json()); //middleware que transforma la req.body a un json

const PORT = 3000; //puerto en el que se levanta el servidor

//Se define un controlador de ruta para la página de inicio por defecto
app.get( "/", ( _req, res ) => {
    res.send( "Hello world!" );
} );

app.use('/api/users',userRouter)  //Se define que se usen las rutas del controller

app.listen(PORT,() => {
    console.log(`Listen on ${PORT}`);
});