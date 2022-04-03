const { Sequelize } = require("sequelize");


const sequelize = new Sequelize("agp", "postgres", "admin", {
  host: "localhost",
  port: "5433",
  dialect: "postgres",
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión Exitosa");
  } catch (error) {
    console.error("Conexión fallida", error);
  }
};

testConnection();

const db = {
  Sequelize,
  sequelize,
};

module.exports = db;
