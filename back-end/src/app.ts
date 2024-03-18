import express from 'express';
import bodyParser from 'body-parser';
import { clientsRouter } from './routers';
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

app.use('/clients', clientsRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
