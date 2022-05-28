const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const ColaboradorModel = sequelize.define(
  "Colaborador",
  {

    col_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   col_nombre_apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    col_correo: {
       type: DataTypes.STRING,
       allowNull: false,
     },
     
    col_ci: {
        type: DataTypes.STRING,
        allowNull: false,
      }
      ,
     
      col_telefono: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      col_genero: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      col_sector: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
    
    },
    {
      tableName: "colaborador",
      timestamps: false,
    }
  );
  
  module.exports = { ColaboradorModel};