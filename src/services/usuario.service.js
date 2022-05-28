const { UsuarioModel } = require("../models/usuario.model");
const { sequelize } = require("./bd.service");
const { QueryTypes } = require("sequelize");
const jwt = require("jsonwebtoken");

const list = async (query, pageStart = 1, pageLimit = 10) => {
  const usuarioModelResults = await UsuarioModel.findAll(
    );

  const usuariosArray = new Array();
  for (let i = 0; i < usuarioModelResults.length; i++) {
    const usuariosResult = usuarioModelResults[i];
    usuariosArray.push(usuariosResult.dataValues);
  }
  return usuariosArray;
};
const getById = async (usu_codigo) => {
  const usuarioModelResult = await UsuarioModel.findByPk(usu_codigo);

  if (usuarioModelResult) {
    return usuarioModelResult.dataValues;
  } else {
    return null;
  }
};
const create = async (data) => {
  const usuarioModelResult = await UsuarioModel.create(data);
  if (usuarioModelResult) {
    return usuarioModelResult.dataValues;
  } else {
    return null;
  }
  return data;
};

const update = async (data) => {
  const usuarioModelCount = await UsuarioModel.update(data, {
    where: {
      usu_codigo: data.usu_codigo,
    },
  });

  if (usuarioModelCount > 0) {
    const usuarioModelResult = await UsuarioModel.findByPk(data.usu_codigo);
    return usuarioModelResult.dataValues;
  } else {
    return null;
  }
};

const remove = async (usu_codigo) => {
  const usuarioModelCount = await UsuarioModel.destroy({
    where: {
      usu_codigo: usu_codigo,
    },
  });

  if (usuarioModelCount > 0) {
    return true;
  } else {
    return false;
  }
};


const login = async (data) => {
  // BUscar al usuario por el username y password
  let usuariosResult = await sequelize.query(
    `SELECT usu_codigo, usu_correo, usu_token FROM usuario WHERE usu_correo = :c
                          AND usu_pass = :p LIMIT 1 `,
    {
      replacements: {
        c: data.usu_correo,
        p: data.usu_pass,
      },
      //type:QueryTypes.SELECT
    }
  );

  usuariosResult = usuariosResult && usuariosResult[0] ? usuariosResult[0] : [];


  if (usuariosResult && usuariosResult.length > 0) {
    if (usuariosResult[0].usu_token && usuariosResult[0].usu_token != " ") {
      return {
        token: usuariosResult[0].usu_token,
        codigo : usuariosResult[0].usu_codigo,
      };
    } else {
      const payload = {
        usu_correo: data.usu_correo,
        usu_codigo: usuariosResult[0].usu_codigo,
      };

      var token = jwt.sign(payload, "123456");

      let updateTokenUsuarioResult = await sequelize.query(
        `UPDATE usuario SET usu_token =:t
                                              WHERE usu_codigo = :c `,
        {
          replacements: {
            t: token,
            c: usuariosResult[0].usu_codigo,
          },
          //type:QueryTypes.SELECT
        }

        
      );
      const codigo = usuariosResult[0].usu_codigo;
      return {
        token, codigo
             };
    }
  } else {
    throw new Error("Datos de usuario o password incorrectos");
  }
};


module.exports = {
  list,
  getById,
  create,
  update,
  remove,
  login
  
};
