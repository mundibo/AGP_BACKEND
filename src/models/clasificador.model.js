const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const ClasificadorModel = sequelize.define(
  "Clasificador",
  {

    cla_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  
    cla_descripcion: {
       type: DataTypes.STRING,
       allowNull: false,
     }
    
    },
    {
      tableName: "clasificador",
      timestamps: false,
    }
  );
  
  module.exports = { ClasificadorModel};