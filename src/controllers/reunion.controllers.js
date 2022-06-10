const reunionService = require("../services/reunion.service");

const list = async (req, res) => {
  const reuniones = await reunionService.list(req.query.q);

  res.send({ success: true, reuniones });
};

const getById = async (req, res) => {
  const reunion = await reunionService.getById(req.params.id);

  let jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["reunion"] = reunion;

  res.status(201).send(jsonResultado);
};

const create = async (req, res) => {
  const reunion = await reunionService.create(req.body);
  res.status(202).send({ success: true, reunion });
};

const update = async (req, res) => {
  const reunion = await reunionService.update(req.body);
  res.status(202).send({ success: true, reunion });
};

const remove = async (req, res) => {
  const booleanValue = await reunionService.remove(req.params.id);
  res.status(202).send({ success: booleanValue });
};
const listFilter = async (req, res) => {
  console.log("entro filtro reunion")
   const reuniones = await reunionService.listFilter(req.query.q);
 
   res.send({ success: true, reuniones });
 };
 

module.exports = {
  list,
    getById,
  create,
  update,
  remove,
  listFilter
};
