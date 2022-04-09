const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const ValorModel = sequelize.define(
  "Valor",
  {

    val_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   val_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    val_descripcion: {
       type: DataTypes.STRING,
       allowNull: false,
     }
    
    },
    {
      tableName: "valor",
      timestamps: false,
    }
  );
  
  module.exports = { ValorModel};