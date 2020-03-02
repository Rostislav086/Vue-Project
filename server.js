const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use('/', express.static('./src'));

app.get('/api/items', (req, res)=> {
    fs.readFile('./src/items.json', 'utf-8', (err, data)=> {
        if(err) {
            res.send(JSON.stringify({result:0, text: err}));
        }else {
            res.send(data);
        }
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
    
});