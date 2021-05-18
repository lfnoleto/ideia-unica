import { MongoClient } from 'mongodb'


let uri = process.env.MONGODB_URI
let dbName = process.env.MONGODB_DB

let cachedClient = null;
let cachedDB = null;


if(!uri){
    throw new Error(
        'Please define the MONGODB_URI environnent variable inside .env.local'
    )
}

if(!dbName){
    throw new Error(
        'Please define the MNGODB enviroment variable inside .env.local'
    )
}

export async function connectToDatabase(){
    if(cachedClient && cachedDB){
        return{client:cachedClient, db:cachedDB}
    }

    const client = await MongoClient.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })

    const db = await client.db(dbName)

    cachedClient = client
    cachedDB = db

    return {client,db}

}




