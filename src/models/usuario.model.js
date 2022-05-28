const {DataTypes} = require('sequelize');
const {sequelize} = require('../services/bd.service');

const UsuarioModel = sequelize.define('Usuario', {
  
  usu_codigo: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  usu_nombre: {
    type: DataTypes,
    allowNull: false,
  },
  usu_apellido: {
    type: DataTypes,
    allowNull: false,
  },
  usu_correo: {
    type: DataTypes,
    allowNull: false,
  },
  usu_pass: {
    type: DataTypes,
    allowNull: false,
  },
  usu_imagen: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'usuario',
  timestamps: false,
});

module.exports = {
  UsuarioModel,
};