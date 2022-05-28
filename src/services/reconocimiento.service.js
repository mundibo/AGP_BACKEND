const { ReconocimientoModel } = require("../models/reconocimiento.model");
const { sequelize } = require("../services/bd.service");
const { QueryTypes } = require("sequelize");




const getById = async (re_codigo) => {
    const reconocimientoModelResult = await ReconocimientoModel.findByPk(re_codigo);

    console.log("find codigo", re_codigo);

    if (reconocimientoModelResult) {
        return reconocimientoModelResult.dataValues;
    } else {
        return null;
    }
};

// Consulta en la base de datos
const list = async () => {

    let sql = `select r.*,c.col_nombre_apellido as nombre, v.val_nombre as valor   
    from reconocimiento as r 
    inner join colaborador as c
    on c.col_codigo = re_codcol
    inner join valor as v
    on v.val_codigo = re_codval
    ORDER BY re_codigo`;





    const ReconocimientoModelResults = await sequelize.query(sql);
   

    if (ReconocimientoModelResults) {
      return ReconocimientoModelResults[0]
    } else {
      return null;
    }
  };



const create = async (data) => {
    console.log("create data", data);

    const reconocimientoModelResult = await ReconocimientoModel.create(data);

    if (reconocimientoModelResult) {
        return reconocimientoModelResult.dataValues;
    } else {
        return null;
    }

    return data;
};


const update = async (data) => {
    console.log("update data", data);

    const reconocimientoModelCount = await ReconocimientoModel.update(data, {
        where: {
            re_codigo: data.re_codigo,
        },
    });

    if (reconocimientoModelCount > 0) {
        const colaboradorModelResult = await ReconocimientoModel.findByPk(data.re_codigo);
        return colaboradorModelResult.dataValues;
    } else {
        return null;
    }
};
    
module.exports = {
   
    create, getById, list, update
    
};
