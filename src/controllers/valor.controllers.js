
const valorService = require('../services/valor.service');

const list = async (req, res)=> {

const valores = await valorService.list(req.query.q);

  res.send(
      {success:true,
     valores 
    }
  );
}

const listFilter = async (req, res)=> {

  const valores = await valorService.listFilter (req.query.q);
  
    res.send(
        {success:true,
       valores 
      }
    );
  }

const getById= async (req, res)=> {

    const valor = await valorService.getById(req.params.id);

    let jsonResultado = req.query;
    jsonResultado  ['success'] = true;
    jsonResultado  ['valor'] = valor;

  res.status(201).send(jsonResultado);
}

const create = async (req, res)=> {
    const valor = await valorService.create(req.body);
  res.status(202).send(
      {success:true,
    valor}
  );
}

const update = async (req, res)=> {
    const valor = await valorService.update(req.body);
  res.status(202).send(
      {success:true,
    valor}
  );
}


const remove = async (req, res)=> {
    const booleanValue = await valorService.remove(req.params.id);
  res.status(202).send(
      {success: booleanValue,
    }
  );
}

module.exports={
    list,listFilter, getById,create, update, remove


};
