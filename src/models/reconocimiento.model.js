const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");
const { ColaboradorModel } = require("./colaborador.model");
const { ValorModel } = require("./valor.model");

const ReconocimientoModel = sequelize.define(
    "Reconocimiento",
    {

        re_codigo: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        re_codcol: {
            type: DataTypes.INTEGER,
            allowNull:  true,
            references: {
                model: 'colaborador',
                key: 'col_codigo',
            }
        },
        re_codval: {
            type: DataTypes.INTEGER,
            allowNull:  true,
            references: {
                model: 'valor',
                key: 'val_codigo',
            }
        },

        re_mensaje: {
            type: DataTypes.STRING,
            allowNull: false,
        },


    },
    {
        tableName: "reconocimiento",
        timestamps: false,
    }
);


ReconocimientoModel.belongsTo(ColaboradorModel, { foreignKey: 're_codcol' });
ReconocimientoModel.belongsTo(ValorModel, { foreignKey: 're_codval' });

module.exports = { ReconocimientoModel };