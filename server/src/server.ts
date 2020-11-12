import express from 'express';

const app = express();

app.get('/users', (request, response)=>{
    //console.log('Listar Ususarios');
    //response.send("Hello Word!");
    response.json([
        'Markus Lima',
        'Markusmak@gmail.com',
        'Mk'
    ])

})

app.listen(3333);