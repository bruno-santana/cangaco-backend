const connection = require('../database/connection');

module.exports = {
    async create(request, response) {

        const { source, author, city, year_of_publication, publishing_company } = request.body;

        try {

            await connection('bibliographies')
                .insert({ source, author, city, year_of_publication, publishing_company });
            
            return response.status(200).send('Bibliografia cadastrada com sucesso');
        } catch {
            
            return response.status(400).send({error: 'Erro ao cadastrar a bibliografia'});
        }
    },
}