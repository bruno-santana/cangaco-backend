const connection = require('../database/connection');
const bcrypt = require('bcryptjs');

module.exports = {
    async create(request, response) {
        const { name, email, password } = request.body;       

        bcrypt.hash(password, 10, async function(error, password){
            
            try{  
                
                await connection('users').insert({ name, email, password });
    
                return response.json('Cadastrado com sucesso');
    
            } catch (error) {
    
                return response.status(400).send({ error: 'Erro ao tentar cadastrar!'});
            }
        }); 
       
    },

    async index(request, response) {
        try{
            const users = await connection('users').select('*');

            return response.json( users );
        } catch {

            return response.status(400).send({ error: 'Erro ao tentar listar os usuários.'});

        }
    },
};