const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const ReunionModel = sequelize.define(
  "Reunion",
  {
    // Model attributes are defined here
    reu_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   
 
    reu_codcol: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    reu_motivo: {
      type: DataTypes.STRING,
      allowNull: true,
    } ,
    reu_fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      }
  },
  {
    tableName: "reunion",
    timestamps: false,
  }
);

module.exports = { ReunionModel };
