const reconocimientoController = require('../controllers/reconocimiento.controllers');

module.exports = (app) =>{



app.get('/reconocimiento', reconocimientoController.list);
app.post('/reconocimiento/create', reconocimientoController.create);
app.get('/reconocimientos-filter', reconocimientoController.listFilter);
app.get('/reconocimiento/find/:id',reconocimientoController.getById);
app.put('/reconocimiento/update', reconocimientoController.update);


}
