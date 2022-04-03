
const colaboradorService = require('../services/colaborador.service');

const list = async (req, res)=> {

const colaboradores = await colaboradorService.list(req.query.q);

  res.send(
      {success:true,
     colaboradores 
    }
  );
}

const listFilter = async (req, res)=> {

  const colaboradores = await colaboradorService.listFilter (req.query.q);
  
    res.send(
        {success:true,
       colaboradores 
      }
    );
  }

const getById= async (req, res)=> {

    const colaborador = await colaboradorService.getById(req.params.id);

    let jsonResultado = req.query;
    jsonResultado  ['success'] = true;
    jsonResultado  ['colaborador'] = colaborador;

  res.status(201).send(jsonResultado);
}

const create = async (req, res)=> {
    const colaborador = await colaboradorService.create(req.body);
  res.status(202).send(
      {success:true,
    colaborador}
  );
}

const update = async (req, res)=> {
    const colaborador = await colaboradorService.update(req.body);
  res.status(202).send(
      {success:true,
    colaborador}
  );
}


const remove = async (req, res)=> {
    const booleanValue = await colaboradorService.remove(req.params.id);
  res.status(202).send(
      {success: booleanValue,
    }
  );
}

module.exports={
    list,listFilter, getById,create, update, remove


};
