const colaboradorController = require('../controllers/colaborador.controllers');

module.exports = (app) =>{



app.get('/colaboradores', colaboradorController.list);

app.get('/colaboradores-filter', colaboradorController.listFilter);
// Ejemplo de peticion con queryparams
app.get('/colaborador/find/:id', colaboradorController.getById);

app.post('/colaborador/create', colaboradorController.create);

app.put('/colaborador/update', colaboradorController.update);

app.delete('/colaborador/remove/:id', colaboradorController.remove);

}
