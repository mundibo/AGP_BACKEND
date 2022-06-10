const usuarioController = require('../controllers/usuario.controllers');
const { authorization } = require('../middleware/authorization.middleware');

module.exports = (app) =>{

app.get('/usuarios', usuarioController.list);

app.get('/usuarios/find/:id', usuarioController.getById);

app.post('/usuarios/create', usuarioController.create);

app.put('/usuarios/update', usuarioController.update);

app.delete('/usuarios/remove/:id', usuarioController.remove);

app.post("/usuarios/login", usuarioController.login);

}
