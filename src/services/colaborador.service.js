const { ColaboradorModel } = require("../models/colaborador.model");
const { sequelize } = require("../services/bd.service");
const { QueryTypes } = require("sequelize");

// Consulta en la base de datos
const list = async (query, pageStart = 1, pageLimit = 10) => {
    const ColaboradorModelResults = await ColaboradorModel.findAll();

    const colaboradoresArray = new Array();
    for (let i = 0; i < ColaboradorModelResults.length; i++) {
        const colaboradorResult = ColaboradorModelResults[i];
        colaboradoresArray.push(colaboradorResult.dataValues);
    }

    return colaboradoresArray;
};



//Consulta en la base de datos filtrando por palabras
const listFilter = async (query, pageStart = 1, pageLimit = 10) => {

    let colaboradorResult = await sequelize.query(`SELECT * FROM colaborador WHERE (UPPER(col_nombre_apellido) LIKE :q
                                           OR UPPER(col_ci) LIKE :q)
                                           ORDER BY col_codigo`, {
        replacements: {
            q: (query ? '%' + query.toUpperCase() + '%' : '%')
        },
        //type:QueryTypes.SELECT
    });


    colaboradorResult = (colaboradorResult && colaboradorResult[0]) ? colaboradorResult[0] : [];

    console.log("colaboradorResult", colaboradorResult);

    return colaboradorResult;

};

const getById = async (codigo) => {
    const colaboradorModelResult = await ColaboradorModel.findByPk(codigo);

    console.log("find codigo", codigo);

    if (colaboradorModelResult) {
        return colaboradorModelResult.dataValues;
    } else {
        return null;
    }
};
const create = async (data) => {
    console.log("create data", data);

    const colaboradorModelResult = await ColaboradorModel.create(data);

    if (colaboradorModelResult) {
        return colaboradorModelResult.dataValues;
    } else {
        return null;
    }

    return data;
};


const update = async (data) => {
    console.log("update data", data);

    const colaboradorModelCount = await ColaboradorModel.update(data, {
        where: {
            col_codigo: data.col_codigo,
        },
    });

    if (colaboradorModelCount > 0) {
        const colaboradorModelResult = await ColaboradorModel.findByPk(data.col_codigo);
        return colaboradorModelResult.dataValues;
    } else {
        return null;
    }
};
const remove = async (col_codigo) => {
    console.log("borrar codigo", col_codigo);

    const colaboradorModelCount = await ColaboradorModel.destroy({
        where: {
            col_codigo: col_codigo
        },
    });

    if (colaboradorModelCount > 0) {
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
