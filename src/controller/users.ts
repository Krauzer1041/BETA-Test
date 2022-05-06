import express from 'express';
import userData from '../models/users.json'; //Se obtiene los usuarios del JSON
  
const router =  express.Router();

router.get('/', (_req, res) => { //Se obtienen todas los usuarios del  modelo
    res.send(userData)
})

router.post('/', (req,res) => { //Se agrega un usuario en memoria
    try{
        const{id,nombre,apellidos,genero,telefono} = req.body; //Se obtiene los campos del usuario
        
        if (userData.find(p => p.id === id)){ //Se valida si el ID del usuario ya existe
            res.status(403).send('User already exists') //Se envía una respuesta 403 en caso que ya exista el usuario
        }else{
            userData.push({id,nombre,apellidos,genero,telefono}); //Caso contrario se agrega el usuario en memoria       
            res.send('User added successfully') //Respuesta satisfactoria
    } 
    }catch(e){
        res.status(400).send(); //En caso de algun error se envia un error 400
    }
}) 

router.put('/', (req,res) => { //Modificacion de un usuario
    try{
        const{id,nombre,apellidos,genero,telefono} = req.body;
        
        if (userData.find(p => p.id === id)){ // Se valida que el ID del usuario exista
            var index = userData.findIndex(obj => obj.id==id); //Se encuentra el indice del usuario
            userData[index].nombre = nombre; //Se modifican los campos del usuario
            userData[index].apellidos = apellidos;
            userData[index].genero = genero;
            userData[index].telefono = telefono;   
            res.send('User modified successfully')         
        }else{          
            res.status(403).send('User does not exist') //Si el usuario no existe se envia un error 403
    } 
    }catch(e){
        res.status(400).send();
    }
}) 

router.delete('/', (req,res) => { //Se eliminar un usuario 
    try{
        const{id} = req.body;

        if (userData.find(p => p.id === id)){ // Se valida que el usuario exista
            var index = userData.findIndex(obj => obj.id==id); //Se encuentra el indice del usuario
            userData.splice(index,1) //Se elimina el usuario basado en el indice que encontramos anteriormente
            res.send('User deleted successfully')         
        }else{            
            res.status(403).send('User does not exist') //Se envia un 403 en caso que no exista
    } 
    }catch(e){
        res.status(400).send('An error occurred');
    }
}) 

export default router