const usuarioService = require("../services/usuario.service");

const list = async (req, res) => {
  const usuarios = await usuarioService.list(req.query.q);

  res.send({ success: true, usuarios });
};


const getById = async (req, res) => {
  const usuario = await usuarioService.getById(req.params.id);

  let jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["usuario"] = usuario;

  res.status(201).send(jsonResultado);
};

const create = async (req, res) => {
  const usuario = await usuarioService.create(req.body);
  res.status(202).send({ success: true, usuario });
};

const update = async (req, res) => {
  const usuario = await usuarioService.update(req.body);
  res.status(202).send({ success: true, usuario });
};

const remove = async (req, res) => {
  const booleanValue = await usuarioService.remove(req.params.id);
  res.status(202).send({ success: booleanValue });
};

const login = async (req, res) => {

  try {
    const usuario = await usuarioService.login (req.body);
    res.status(202).send({ success: true,
      token :  usuario.token,
      codigo:  usuario.codigo,
  });
  } catch (error) {
    res.status(202).send(
      { success: false,
        error : error.message 
  
      });
  
  }
  
    
  };

module.exports = {
  
    list,getById,create, update, remove, login

  };