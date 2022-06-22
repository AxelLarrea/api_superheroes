const { MongoClient } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app= express();
const port = 4000;


app.set('port',port);

app.use(express.json())
app.use(cors());


// Connection URL
const url = 'mongodb://api_superheroes_db_1:27017';
const client = new MongoClient(url);


// Database Name
const dbName = 'superheroes';

async function main() {
    try {

        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);

        // db.createCollection('movies');

        const movies = db.collection('movies');
        await movies.insertOne({ title: 'Back to the Future' });
        
        // const results = await db.collection('movies').find({ title: 'Back to the Future'});
        const query = { title: 'Back to the Future' };
        const movie = await movies.findOne(query);
        console.log(movie);


        //movies.updateOne({ _id: db.ObjectId('Loquesea')}, { $set: { title: 'Loquesea' }});
        

        //movies.deleteOne({ title: 'Back to the Future' });
    } catch (error) {
        console.log(error);
    }
};

main();


app.post('/subscribir', (req, res) =>{
    try{
        let {canal}=req.body;


    } catch (error) {
        console.log(error);
    ;}
});

app.post('/desubscribir/:canal', (req, res) =>{
    try {
        let {canal}=req.params;

    } catch (error) {
        console.log(error);
    }
});

app.post('/publicar/:canal', (req, res) =>{
    try {
        let {message}=req.body;
        let {canal}=req.params;
        
    } catch (error) {
        console.log(error)
    };

});


app.get('/activos', (req, res) =>{
    try {
        
    } catch (error) {
        console.log(error)
    };
});

app.get('/activoscanal/:canal', (req, res) => {
    try {
        let {canal}=req.params;

    } catch (error) {
        console.log(error);
    }
});

app.listen(app.get('port'), (err)=> {
    console.log(`Server running on port ${app.get('port')}`)
})