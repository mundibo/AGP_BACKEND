const valorController = require('../controllers/valor.controllers');

module.exports = (app) =>{



app.get('/valores', valorController.list);

app.get('/valores-filter', valorController.listFilter);
// Ejemplo de peticion con queryparams
app.get('/valores/find/:id', valorController.getById);

app.post('/valores/create', valorController.create);

app.put('/valores/update', valorController.update);

app.delete('/valores/remove/:id', valorController.remove);

}
