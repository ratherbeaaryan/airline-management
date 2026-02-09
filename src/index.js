require('dotenv').config();
const Logger = require('./config/logger-config');

const express = require('express');

const { serverConfig } = require('./config');
//const { AboutController , HomeController} = require('./controllers')
const apiRoutes = require('./routes');

const app = express();



app.use('/api', apiRoutes);

app.listen(serverConfig.PORT , ()=>{
    console.log(`Successfully started the server on PORT : ${serverConfig.PORT}`); 
    
    

});


