const connection = require('../database/connerction');
module.exports = {
    async create(request,response){
        const {id } = request.body;

        const ong = await connection('ongs')
        .where('id',id)
        .select('*') 
        .first(); 

        if(!ong){
            return response.status(404).json({error: "No ONF found with this ID"});
        }else{
            return response.json(ong.name);
        }


    }

}