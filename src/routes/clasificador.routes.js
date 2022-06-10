const clasificadorController = require('../controllers/clasificador.controllers');

module.exports = (app) =>{




app.get('/clasificadores', clasificadorController.list);

app.get('/clasificadores-filter', clasificadorController.listFilter);
// Ejemplo de peticion con queryparams
app.get('/clasificadores/find/:id', clasificadorController.getById);

app.post('/clasificadores/create', clasificadorController.create);

app.put('/clasificadores/update', clasificadorController.update);

app.delete('/clasificadores/remove/:id', clasificadorController.remove);

}
