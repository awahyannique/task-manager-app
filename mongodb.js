// CRUD create read update delete
// const color = require('colors')

// const {MongoClient, ObjectID} = require('mongodb')



// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())


// const connectURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectURL, {useNewUrlParser: true}, (error, client) => {
//     if(error) {
//         return console.log('Unable to connect to databse')
//     }

//     console.log(color.yellow(`Connected to ${databaseName} Database`))

    // const db = client.db(databaseName)

    // db.collection('users').deleteOne({
    //     age: 100

    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID('5e574628cfb972090683dfed')
    // }, {
    //     $set: {
    //         age: 100
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log('Cannot update database', error)
    // })

    // db.collection('users').findOne({
    //     name: 'mambo',
    //     age: 19
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to connect to database')
    //     }
    //     console.log(result)
    // })


    // db.collection('task').insertMany([
    //     {
    //         description: 'Desc1',
    //         completed: false
    //     },
    //     {
    //         description: 'Des2',
    //         completed: false
    //     },
    //     {
    //         description: 'Des3',
    //         completed: false
    //     }
        
    // ],(error, result) => {
    //     if(error){
    //         return console.log(`Unable to connect to database due to ${error}`)
    //     } 
    //      console.log(result.ops)
    // })

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'awah',
    //     age: 25
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to connect to database')
    //     } else {
    //         console.log(result.ops)
    //     }
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'neh',
    //         age: 23
    //     },
    //     {
    //         name: 'mambo',
    //         age: 19
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to connect to database')
    //     }

    //     console.log(result.ops)
    // });

// });