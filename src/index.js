import express from 'express';
import cors from 'cors';
import env from 'dotenv';
import morgan from 'morgan';

import * as errorRoutes from './server/utils/error';
import {connect} from './db/dbConnection';
import apiRoutes from './server/index.route';
import {brokerConnect} from './broker/brokerConnection';

env.config();
const PORT = process.env.PORT || 8000;
const app = express();

connect()
brokerConnect()
app.use(
    express.urlencoded({
        extended:true,
    }),
)
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('/api',apiRoutes);
app.use(errorRoutes.errorGeneral);
app.use(errorRoutes.errorWithMessage);


app.listen(PORT, (err, succ) => {
    if (!err) {
      console.log(`server is up and running at ${PORT}`);
    } else {
      console.log('server could not be started');
    }
  }); 
