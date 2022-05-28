const express = require("express");
const bodyparser = require("body-parser");
const multer = require("multer");
const app = express();
const upload = multer({ dest: "uploads/" });
const cors = require('cors');
app.use(cors());
app.use(bodyparser());


require("./src/routes/colaborador.routes")(app);
require("./src/routes/valor.routes")(app);
require("./src/routes/reconocimiento.routes")(app);

require("./src/routes/usuario.routes")(app);

app.listen(3000);