const {MongoClient} = require('mongodb');
var url = "mongodb://localhost:27017/";  
const client = new MongoClient(url);
async function main() {
	// we'll add code here soon
    try {
        await client.connect();
    
        await listDatabases(client);
    
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);