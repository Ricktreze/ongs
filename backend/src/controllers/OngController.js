const crypto = require('crypto');
const connection = require('../database/connerction');


module.exports = {

    async index(request, response){
        const onsg = await connection('ongs').select('*');   
    
        return response.json(onsg);
    },

    async create(request,response){
        const {name, email, whatsapp, city, uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({ 
            id,
            name,
            email,
            whatsapp,
            city,   
            uf        
        });

        return response.json({id});
    }
}