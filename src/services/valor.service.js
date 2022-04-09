const { ValorModel } = require("../models/valor.model");
const { sequelize } = require("../services/bd.service");
const { QueryTypes } = require("sequelize");

// Consulta en la base de datos
const list = async (query, pageStart = 1, pageLimit = 10) => {
    const ValorModelResults = await ValorModel.findAll();

    const valoresArray = new Array();
    for (let i = 0; i < ValorModelResults.length; i++) {
        const valorResult = ValorModelResults[i];
        valoresArray.push(valorResult.dataValues);
    }

    return valoresArray;
};



//Consulta en la base de datos filtrando por palabras
const listFilter = async (query, pageStart = 1, pageLimit = 10) => {

    let valorResult = await sequelize.query(`SELECT * FROM valor WHERE (UPPER(val_nombre) LIKE :q
                                           OR UPPER(val_descripcion) LIKE :q)
                                           ORDER BY val_codigo`, {
        replacements: {
            q: (query ? '%' + query.toUpperCase() + '%' : '%')
        },
        //type:QueryTypes.SELECT
    });


    valorResult = (valorResult && valorResult[0]) ? valorResult[0] : [];

    console.log("valorResult", valorResult);

    return valorResult;

};

const getById = async (codigo) => {
    const ValorModelResult = await ValorModel.findByPk(codigo);

    console.log("find codigo", codigo);

    if (ValorModelResult) {
        return ValorModelResult.dataValues;
    } else {
        return null;
    }
};
const create = async (data) => {
    console.log("create data", data);

    const ValorModelResult = await ValorModel.create(data);

    if (ValorModelResult) {
        return ValorModelResult.dataValues;
    } else {
        return null;
    }

    return data;
};


const update = async (data) => {
    console.log("update data", data);

    const ValorModelCount = await ValorModel.update(data, {
        where: {
            val_codigo: data.val_codigo,
        },
    });

    if (ValorModelCount > 0) {
        const ValorModelResult = await ValorModel.findByPk(data.val_codigo);
        return ValorModelResult.dataValues;
    } else {
        return null;
    }
};
const remove = async (val_codigo) => {
    console.log("borrar codigo", val_codigo);

    const ValorModelCount = await ValorModel.destroy({
        where: {
            val_codigo: val_codigo
        },
    });

    if (ValorModelCount > 0) {
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
