const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');
const apirouter = require('./routes');
const logger = require('./logging/index.js');

const app = express();

const corsOptions = {
  origin: 'http://localhost:8080/',
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

// Routes
app.use('/api', apirouter);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    logger.info(`Server is running on port  ${PORT}.`);
  });
});
