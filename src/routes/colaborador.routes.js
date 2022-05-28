const colaboradorController = require('../controllers/colaborador.controllers');

module.exports = (app) =>{



app.get('/colaboradores', colaboradorController.list);

app.get('/colaboradores-filter', colaboradorController.listFilter);
// Ejemplo de peticion con queryparams
app.get('/colaboradores/find/:id', colaboradorController.getById);

app.post('/colaboradores/create', colaboradorController.create);

app.put('/colaboradores/update', colaboradorController.update);

app.delete('/colaboradores/remove/:id', colaboradorController.remove);

}
