const connection = require('../database/connection');
const bcrypt = require('bcryptjs');

module.exports = {

    async create(request, response) {   
        //desestruturacao
        const { email, password } = request.body;
        //busca por email
        const user = await connection('users').where('email', email);        
        //verifica se existe
        if(!user) {
            return response.status(400).send({ error: 'Nenhum usuário localizado para o email digitado.' });
        }
        //
        if(!await bcrypt.compare(password, user[0].password)){
            return response.status(400).send({ error: 'Senha errada.' });
        }
        return response.json(user);
    }
};