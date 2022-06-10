
const { ReunionModel } = require("../models/reunion.model");
const { sequelize } = require("./bd.service");
const { QueryTypes } = require("sequelize");

// Consulta en la base de datos
const list = async () => {

  let sql = `select r.reu_motivo, to_char(r.reu_fecha,'DD/MM/YYYY')  reu_fecha, r.reu_codigo, c.col_nombre_apellido as nombre  
              from reunion as r 
              inner join colaborador as c
              on c.col_codigo = reu_codcol
              ORDER BY r.reu_fecha asc`;

  const reunionModelResults = await sequelize.query(sql);
   
    if (reunionModelResults) {
      return reunionModelResults[0]
    } else {
      return null;
    }
  };
  //filtro
const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
  let reunionesResult = await sequelize.query(
    `select r.reu_motivo, to_char(r.reu_fecha,'DD/MM/YYYY')  reu_fecha, r.reu_codigo, c.col_nombre_apellido as nombre  
    from reunion as r 
    inner join colaborador as c
    on c.col_codigo = reu_codcol

     WHERE UPPER( to_char(r.reu_fecha,'DD/MM/YYYY')) LIKE :q`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      //type:QueryTypes.SELEC
    }
  );
  reunionesResult = reunionesResult && reunionesResult[0] ? reunionesResult[0] : [];
  
  console.log("reunionesResult", reunionesResult);
  return reunionesResult;
};


// Buscar en la base de datos por codigo
const getById = async (reu_codigo) => {
  const reunionModelResult = await ReunionModel.findByPk(reu_codigo);

  console.log("encontrado codigo reu", reu_codigo);

  if (reunionModelResult) {
    return reunionModelResult.dataValues;
  } else {
    return null;
  }
};

//Guardar datos nuevos en la base de datos
const create = async (data) => {
  const reunionModelResult = await ReunionModel.create(data);

  if (reunionModelResult) {
    return reunionModelResult.dataValues;
  } else {
    return null;
  }

  return data;
};

//Actualizar datos en la base de datos
const update = async (data) => {
  const reunionModelCount = await ReunionModel.update(data, {
    where: {
      reu_codigo: data.reu_codigo,
    },
  });

  if (reunionModelCount > 0) {
    const reunionModelResult = await ReunionModel.findByPk(data.reu_codigo);
    return reunionModelResult.dataValues;
  } else {
    return null;
  }
};

//Eliminar datos en la base de datos

const remove = async (reu_codigo) => {
  const reunionModelCount = await ReunionModel.destroy({
    where: {
      reu_codigo: reu_codigo,
    },
  });

  if (reunionModelCount > 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  list,
  getById,
  create,
  update,
  remove,
  listFilter
};
