
const clasificadorService = require('../services/clasificador.service');

const list = async (req, res)=> {

const clasificadores = await clasificadorService.list(req.query.q);

  res.send(
      {success:true,
     clasificadores 
    }
  );
}

const listFilter = async (req, res)=> {

  const clasificadores = await clasificadorService.listFilter (req.query.q);
  
    res.send(
        {success:true,
       clasificadores 
      }
    );
  }

const getById= async (req, res)=> {

    const clasificador = await clasificadorService.getById(req.params.id);

    let jsonResultado = req.query;
    jsonResultado  ['success'] = true;
    jsonResultado  ['clasificador'] = clasificador;

  res.status(201).send(jsonResultado);
}

const create = async (req, res)=> {
    const clasificador = await clasificadorService.create(req.body);
  res.status(202).send(
      {success:true,
    clasificador}
  );
}

const update = async (req, res)=> {
    const clasificador = await clasificadorService.update(req.body);
  res.status(202).send(
      {success:true,
    clasificador}
  );
}
const remove = async (req, res)=> {
    const booleanValue = await clasificadorService.remove(req.params.id);
  res.status(202).send(
      {success: booleanValue,
    }
  );
}

module.exports={
    list,listFilter, getById,create, update, remove
};
