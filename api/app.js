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

client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName);

async function main() {

    try {
        // db.createCollection('movies');
        // db.createCollection('superheroes');

        db.collection('superheroes').deleteMany({});

        const superheroes = db.collection('superheroes');

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Steve Rogers', 
            nombre_pj: 'Capitan America',
            biografia: 'Es el capi pa',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/marvel-captain-america-1024x819.png'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Stephen Strange', 
            nombre_pj: 'Dr Strange',
            biografia: 'Es el Dr pa',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-DrStrange-1024x819.png'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Thor', 
            nombre_pj: 'Thor',
            biografia: 'Es el Thor papi',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/marvel-thor-1024x819.png'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Vision', 
            nombre_pj: 'Vision',
            biografia: 'Es Vision pa',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/marvel-vision-1024x819.png'
        });
        
        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Peter Parker', 
            nombre_pj: 'Spiderman',
            biografia: 'El hombre que araña',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Spiderman-1024x819.png'
        });
        
        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'James Rhodes', 
            nombre_pj: 'Maquina de Guerra',
            biografia: 'Máquina de guerra xd',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-War-Machine-1024x819.png'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Wanda Maximoff', 
            nombre_pj: 'Bruja Escarlata',
            biografia: 'Wandaaaa, ctv la tanga',
            urls: 'https://yoolk.ninja/wp-content/uploads/2020/11/Marvel-Scarlet-Witch-1-1024x819.png'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Tony Stark',
            nombre_pj: 'Iron Man',
            biografia: 'El ombre de guierro',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Iron-Man-1024x819.png'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Bruce Banner',
            nombre_pj: 'Hulk',
            biografia: 'El verdoso',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Hulk-1024x819.png'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Clint Barton',
            nombre_pj: 'Hawkeye',
            biografia: 'Tiraflechaaa',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Hawkeye-1024x819.png'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'TChala',
            nombre_pj: 'Pantera Negra',
            biografia: 'El N word',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/marvel-black-panther-1024x819.png'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Thanos',
            nombre_pj: 'Thanos',
            biografia: 'El groso',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Thanos-1024x819.png'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Natasha Romanoff',
            nombre_pj: 'Viuda Negra',
            biografia: 'Mommy',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Black-Widow-1024x819.png'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Eddie Brock',
            nombre_pj: 'Venom',
            biografia: 'El venoso',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Venom-alt-1024x819.png'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Ultron',
            nombre_pj: 'Ultron',
            biografia: 'El robotito',
            urls: 'https://yoolk.ninja/wp-content/uploads/2020/12/marvel-ultron-1-1024x819.png'
        });
        
        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Victor von Doom',
            nombre_pj: 'Dr Doom',
            biografia: 'El dr condena',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Dr-Doom-1-1024x819.png'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Quentin Beck',
            nombre_pj: 'Misterio',
            biografia: 'El misterioso',
            urls: 'https://yoolk.ninja/wp-content/uploads/2020/05/marvel-Misterio-1024x819.png'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Norman Osborn',
            nombre_pj: 'Duende Verde',
            biografia: 'El duende',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Green-Goblin-1024x819.png'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Galactus',
            nombre_pj: 'Galactus',
            biografia: 'El devorador de galasias',
            urls: 'https://yoolk.ninja/wp-content/uploads/2020/05/Marvel-Galactus-1024x819.png'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Otto Octavius',
            nombre_pj: 'Dr Octopus',
            biografia: 'El patas de acero',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Spiderman-Dr-Octopus-1024x819.png'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Wade Wilson',
            nombre_pj: 'Deadpool',
            biografia: 'El piscina muerta',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Deadpool-1-1024x819.png'
        });

        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Arthur Joseph Curry',
            nombre_pj: 'Aquaman',
            biografia: 'El ombre de ahua',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/dc-aquaman-1024x819.png'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Selina Kyle',
            nombre_pj: 'Catwoman',
            biografia: 'El ombre o no tan ombre, gato',
            urls: 'https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Catwoman-2-1024x819.png'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Victor Stone',
            nombre_pj: 'Cyborg',
            biografia: 'El ombre casi robot',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/DC-Comics-Cyborg-1024x819.png'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Boston Brand',
            nombre_pj: 'Deadman',
            biografia: 'El ombre muerte',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/dc-deadman-1024x819.png'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Bruce Wayne',
            nombre_pj: 'Batman',
            biografia: 'El ombre de mursiegalo',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/DC-Comics-batman-1024x819.png'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Harleen Frances Quinzel',
            nombre_pj: 'Harley Queen',
            biografia: 'El ombre o no tan ombre, del bromas ',
            urls: 'https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Harley-Queen-1024x819.png'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Clark Kent',
            nombre_pj: 'Superman',
            biografia: 'El ombre super ',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/DC-Comics-Superman-1024x819.png'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Jonn Jonzz',
            nombre_pj: 'Martian Manhunter',
            biografia: 'El ombre pito de hulk ',
            urls: 'https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Martian-Manhunter-2-1024x819.png'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Barry Allen',
            nombre_pj: 'Flash',
            biografia: 'El ombre rapido',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/dc-flash-1024x819.png'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Todd Phillips',
            nombre_pj: 'Joker',
            biografia: 'El bromas',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/dc-joker-alt-1-1024x819.png'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Oswald Chesterfield Cobblepot',
            nombre_pj: 'PingÃ¼ino',
            biografia: 'El ombre pinhuino',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/dc-penguin-1024x819.png'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Diana Prince',
            nombre_pj: 'Mujer Maravilla',
            biografia: 'El ombre o no tan mujer, increible',
            urls: 'https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Wonder-Woman-1024x819.png'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Slade Joseph Wilson',
            nombre_pj: 'Deathstroke',
            biografia: 'El ombre antiamigo de flecha',
            urls: 'https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Deathstroke-1024x819.png'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Billy Batson',
            nombre_pj: 'Shazam',
            biografia: 'El reconocedor de musica',
            urls: 'https://yoolk.ninja/wp-content/uploads/2019/07/dc-shazam-1024x819.png'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Orion',
            nombre_pj: 'Orion',
            biografia: 'El ombre arquero con doble vida',
            urls: 'https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Orion-1024x819.png'
        });

        // const results = await db.collection('movies').find({ title: 'Back to the Future'});

        /* const query = {};
        const pj = await superheroes.findOne(query);
        console.log(pj); */


        //movies.updateOne({ _id: db.ObjectId('Loquesea')}, { $set: { title: 'Loquesea' }});
        

        //movies.deleteOne({ title: 'Back to the Future' });
    } catch (error) {
        console.log(error);
    }
};

main();


app.get('/todos', async (req, res) =>{
    try {
        const pj = await db.collection('superheroes').find().toArray();
        console.log(pj);
        res.json(pj);

    } catch (error) {
        console.log(error)
    };
});

app.get('/todos', async (req, res) =>{
    try {
        const pj = await db.collection('superheroes').find().toArray();
        console.log(pj);
        res.json(pj);

    } catch (error) {
        console.log(error)
    };
});

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


app.listen(app.get('port'), (err)=> {
    console.log(`Server running on port ${app.get('port')}`)
})