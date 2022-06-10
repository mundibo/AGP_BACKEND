const reunionController = require("../controllers/reunion.controllers");

module.exports = (app) => {
  app.get("/reuniones",reunionController.list);

  app.get("/reuniones/find/:id",reunionController.getById);

  app.post("/reuniones/create",reunionController.create);

  app.put("/reuniones/update",reunionController.update);

  app.delete("/reuniones/remove/:id",reunionController.remove);

  app.get('/reuniones-filter', reunionController.listFilter);
};


