const { ClasificadorModel } = require("../models/clasificador.model");
const { sequelize } = require("../services/bd.service");
const { QueryTypes } = require("sequelize");

// Consulta en la base de datos
const list = async (query, pageStart = 1, pageLimit = 10) => {
    const ClasificadorModelResults = await ClasificadorModel.findAll();

    const clasificadoresArray = new Array();
    for (let i = 0; i < ClasificadorModelResults.length; i++) {
        const clasificadorResult = ClasificadorModelResults[i];
        clasificadoresArray.push(clasificadorResult.dataValues);
    }

    return clasificadoresArray;
};



//Consulta en la base de datos filtrando por palabras
const listFilter = async (query, pageStart = 1, pageLimit = 10) => {

    let clasificadorResult = await sequelize.query(`SELECT * FROM clasificador WHERE (UPPER(cla_descripcion) LIKE :q
                                           OR UPPER(cla_descripcion) LIKE :q)
                                           ORDER BY cla_codigo`, {
        replacements: {
            q: (query ? '%' + query.toUpperCase() + '%' : '%')
        },
        //type:QueryTypes.SELECT
    });


    clasificadorResult = (clasificadorResult && clasificadorResult[0]) ? clasificadorResult[0] : [];

    console.log("clasificadorResult", clasificadorResult);

    return clasificadorResult;

};

const getById = async (codigo) => {
    const ClasificadorModelResult = await ClasificadorModel.findByPk(codigo);

    console.log("find codigo", codigo);

    if (ClasificadorModelResult) {
        return ClasificadorModelResult.dataValues;
    } else {
        return null;
    }
};
const create = async (data) => {
    console.log("create data", data);

    const ClasificadorModelResult = await ClasificadorModel.create(data);

    if (ClasificadorModelResult) {
        return ClasificadorModelResult.dataValues;
    } else {
        return null;
    }

    return data;
};


const update = async (data) => {
    console.log("update data", data);

    const ClasificadorModelCount = await ClasificadorModel.update(data, {
        where: {
            cla_codigo: data.cla_codigo,
        },
    });

    if (ClasificadorModelCount > 0) {
        const ClasificadorModelResult = await ClasificadorModel.findByPk(data.cla_codigo);
        return ClasificadorModelResult.dataValues;
    } else {
        return null;
    }
};
const remove = async (cla_codigo) => {
    console.log("borrar codigo", cla_codigo);

    const ClasificadorModelCount = await ClasificadorModel.destroy({
        where: {
            cla_codigo: cla_codigo
        },
    });

    if (ClasificadorModelCount > 0) {
        return true;
    } else {
        return false;
    }
};
module.exports = {
    list,
    listFilter,
    getById,
    create,
    update,
    remove,
};
