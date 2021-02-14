// docker ps
// docker exec -it eb09a72ab816 \
//     mongo -u dariooliveirajr -p 1234 --authenticationDatabase herois

// show dbs
// use herois

// show collections

db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '1998-01-01'
})

db.herois.find()
db.herois.find().pretty()

for(let i = 0; i <= 50000; i++) {
    db.herois.insert({
        nome: `Clone-${i}`,
        poder: 'Velocidade',
        dataNascimento: '1998-01-01'
    })
}

db.herois.count()
db.herois.findOne()
db.herois.find().limit(1000).sort({ nome: -1 })
db.herois.find({}, { poder: 1, _id: 0})

// create
db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '1998-01-01'
})

//read 
db.herois.find()

//update
db.herois.update({ _id: ObjectId("6027235bb3c2421eca970a6d") },
                {nome: 'Mulher maravilha'})

db.herois.update({ poder: 'Velocidade' },
                { $set: {nome: 'super força'}})

//delete
db.herois.remove({})
db.herois.remove({nome: 'Mulher maravilha'})