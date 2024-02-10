import  express from 'express'
import cors from 'cors'

import bodyParser from 'body-parser'
const app = express();
const port = 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
    origin: 'http://127.0.0.1:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  app.use(cors(corsOptions));

  app.get('/', (req, res)=> {
      res.send('Connection successfully established');
  })
  
  app.listen(port, ()=>{console.log(`Listening on port ${port}`);})