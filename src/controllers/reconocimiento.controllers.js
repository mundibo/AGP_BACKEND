const reconocimientoService = require('../services/reconocimiento.service');
const create = async (req, res)=> {
    const  reconocimiento = await reconocimientoService.create(req.body);
  res.status(202).send(
      {success:true,
    reconocimiento}
  );
}


const getById= async (req, res)=> {

    const reconocimiento = await reconocimientoService.getById(req.params.id);

    let jsonResultado = req.query;
    jsonResultado  ['success'] = true;
    jsonResultado  ['reconocimiento'] = reconocimiento;

  res.status(201).send(jsonResultado);
}

const list = async (req, res)=> {

  const reconocimientos = await reconocimientoService.list(req.query.q);
  
    res.send(
        {success:true,
          reconocimientos 
      }
    );
  }

  const update = async (req, res)=> {
    const reconocimiento = await reconocimientoService.update(req.body);
  res.status(202).send(
      {success:true,
    reconocimiento}
  );
}

module.exports={
    create,
    getById, 
    list, 
    update

};