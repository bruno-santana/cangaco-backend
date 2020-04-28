const connection = require('../database/connection');

module.exports = {

    async create(request, response) {

        const { title, description, text, media} = request.body;
        const user_id = request.headers.authorization;

        try {
            const [id] = await connection('articles').insert({
            title,
            description,
            text,
            media,
            user_id,
            });

            return response.json({ id });
        } catch {

            return response.status(400).send({ error: 'Erro ao salvar o artigo.'});
        }
    },

    async index(request, response) {
        try {
            const articles = await connection('articles').select('*');
            
            return response.json(articles);
        } catch {            
            return response.status(400).send({error: 'Erro ao tentar listar os artigos'});
        }
    },

    async delete(request, response) {
        const{ id } = request.params;

        try{
            await connection('articles').where('id', id).delete();
            
            return response.status(204).send();
        } catch {

            return response.status(400).send({ error: 'Erro ao tentar deletar o artigo'});
        }
    }
};