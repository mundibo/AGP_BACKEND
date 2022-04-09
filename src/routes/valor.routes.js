const valorController = require('../controllers/valor.controllers');

module.exports = (app) =>{



app.get('/valores', valorController.list);

app.get('/valores-filter', valorController.listFilter);
// Ejemplo de peticion con queryparams
app.get('/valor/find/:id', valorController.getById);

app.post('/valor/create', valorController.create);

app.put('/valor/update', valorController.update);

app.delete('/valor/remove/:id', valorController.remove);

}
