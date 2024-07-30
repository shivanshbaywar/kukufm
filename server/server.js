import express from "express";
import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";
const app = express();
const router = express.Router();


router.use('^/$',(req,res) => {
    fs.readFile(path.resolve('./build/index.html'),'utf-8',(err, data) => {
        if(err){
            console.log(err);
            res.status(500).send('error: '+err);
        }
        res.send(data.replace('<div id="root"></div>',`<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`));
    })
})
 console.log('build', __dirname);
    router.use(express.static(path.join('build')));

app.use(router);
global.React = React;
const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));