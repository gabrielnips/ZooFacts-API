//                                            REQS                                                                    
const express = require('express');
const app = express();
const path = require('path');
//                                                 CONFIG                                                            
const config = require("./api/config.json")
//                                                 ROUTER                                                            
const home = require('./api/all/home');
const v1AnimalsRouter = require('./api/v1/animals');
const v2AnimalsRouter = require('./api/v2/animals');
//                                                 USE                                                               
app.use('/', home);
app.use('/api/v1', v1AnimalsRouter);
app.use('/api/v2', v2AnimalsRouter);
app.use('/animals', express.static(path.join(__dirname, 'animals')));
//                                                 PORT                                                              
const port = config.port;
//                                                 LISTEN                                                           
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
//                                                                                                                    