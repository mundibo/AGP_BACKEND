const express = require("express");
const bodyparser = require("body-parser");
const multer = require("multer");
const app = express();
const upload = multer({ dest: "uploads/" });
const cors = require('cors');



app.set('json spaces',2);
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors());




require("./src/routes/colaborador.routes")(app);
require("./src/routes/valor.routes")(app);
require("./src/routes/reconocimiento.routes")(app);
require("./src/routes/usuario.routes")(app);
require("./src/routes/reunion.routes")(app);

app.listen(3000);