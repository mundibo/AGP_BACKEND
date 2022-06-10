const { sequelize } = require("../services/bd.service");

// Consulta en la base de datos
const authorization = async (request, response, next) => {
   const token = request.headers['authorization'];

   let usuariosResult = await sequelize.query(
    `SELECT usu_codigo, usu_correo, usu_token FROM usuario WHERE usu_token = :t`,
    {
      replacements: {
        t: token
      },
      //type:QueryTypes.SELECT
    }
  );

  usuariosResult = usuariosResult && usuariosResult[0] ? usuariosResult[0] : [];


  if (usuariosResult && usuariosResult.length > 0) {
    request.usuarioCodigo = usuariosResult[0].usu_codigo;     
    next();

  }else{
      response.send({
          success: false,
          error: 'No se pudo autenticar'
      });
  }



};


module.exports = {
    authorization
};
