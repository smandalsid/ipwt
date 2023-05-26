const { MongoClient, LEGAL_TCP_SOCKET_OPTIONS } = require('mongodb');
const readline = require('readline-sync');

async function main() {

    const uri = "mongodb://localhost:27017";

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls

        while (1) {
            console.log("1. Create a new order");
            console.log("2. Read an order");
            console.log("3. Update an order");
            console.log("4. Delete an order");
            console.log("5. List all orders");
            console.log("6. List orders by status");
            console.log("7. Exit");

            var ch = readline.question("Enter choice: ");

            switch (ch) {
                case "1":
                    var order_id = parseInt(readline.question("Enter order id: "));
                    var customer_name = readline.question("Enter customer name: ");
                    var customer_email = readline.question("Enter customer email: ");
                    var customer_address = readline.question("Enter customer address: ");
                    var product_name = readline.question("Enter product name: ");
                    var quantity = parseInt(readline.question("Enter quantity: "));
                    var total_price = parseInt(readline.question("Enter total price: "));
                    var order_status = readline.question("Enter order status: ");

                    if (await find(client, order_id)) {
                        console.log("\nOrder ID already exists\n");
                    } else {
                        await create(client, {
                            "order_id": order_id,
                            "customer_name": customer_name,
                            "customer_email": customer_email,
                            "customer_address": customer_address,
                            "product_name": product_name,
                            "quantity": quantity,
                            "total_price": total_price,
                            "order_status": order_status
                        });
                    }
                    break;
                case "2":
                    var order_id = parseInt(readline.question("Enter order id: "));
                    await read(client, order_id);
                    break;
                case "3":
                    var order_id = parseInt(readline.question("Enter order id: "));
                    var customer_name = readline.question("Enter customer name: ");
                    var customer_email = readline.question("Enter customer email: ");
                    var customer_address = readline.question("Enter customer address: ");
                    var product_name = readline.question("Enter product name: ");
                    var quantity = parseInt(readline.question("Enter quantity: "));
                    var total_price = parseInt(readline.question("Enter total price: "));
                    var order_status = readline.question("Enter order status: ");
                    if (await find(client, order_id)) {
                        await updateListingByOrderId(client, order_id, {
                            "order_id": order_id,
                            "customer_name": customer_name,
                            "customer_email": customer_email,
                            "customer_address": customer_address,
                            "product_name": product_name,
                            "quantity": quantity,
                            "total_price": total_price,
                            "order_status": order_status
                        });
                    } else {
                        console.log("\nOrder ID does not exist\n");
                    }
                    break;
                case "4":
                    var order_id = parseInt(readline.question("Enter order id: "));
                    await deleteListingByOrderId(client, order_id);
                    break;
                case "5":
                    await listAll(client);
                    break;
                case "6":
                    var status=readline.question("Enter status: ");
                    await orderByStatus(client, status);
                    break;
                case "7":
                    process.exit(0);
                default:
                    console.log("Enter valid option");
                    break;

            }
        }
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

async function create(client, newListing) {
    const result = await client.db("ecommerce").collection("ecommerce_shipment_order_details").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function find(client, listing_orderid) {
    const result = await client.db("ecommerce").collection("ecommerce_shipment_order_details").findOne({ order_id: listing_orderid });
    if (result) {
        return true;
    } else {
        return false;
    }
}

async function read(client, orderid) {
    const result = await client.db("ecommerce").collection("ecommerce_shipment_order_details").findOne({ order_id: orderid });
    if (result) {
        console.log("\nOrder Details:\n");
        console.log(result);
        console.log("\n");
    } else {
        console.log("\nOrder ID does not exist\n");
    }
}

async function updateListingByOrderId(client, orderid, updatedListing) {
    const result = await client.db("ecommerce").collection("ecommerce_shipment_order_details").updateOne({ order_id: orderid }, { $set: updatedListing });
    console.log("\n");
    console.log(result);
    console.log("\n");
    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

async function deleteListingByOrderId(client, orderid) {
    const result = await client.db("ecommerce").collection("ecommerce_shipment_order_details").deleteOne({ order_id: orderid });
    console.log("\n");
    if (result.deletedCount == 0) {
        console.log("Order ID does not exist");
    }
    else {
        console.log(`${result.deletedCount} document(s) was/were deleted.`);
    }
    console.log("\n");
}

async function listAll(client) {
    const result = await client.db("ecommerce").collection("ecommerce_shipment_order_details").find().toArray();
    if(result.length!=0)
    {
        console.log("\n");
        console.log("Orders:",result);
        console.log("\n");
    }
    else
    {
        console.log("\n");
        console.log("No orders exist");
        console.log("\n");
    }
}

async function orderByStatus(client, status){
    const result=await client.db("ecommerce").collection("ecommerce_shipment_order_details").find({"order_status":status}).toArray();
    if(result.length!=0)
    {
        console.log("\n");
        console.log("Orders:",result);
        console.log("\n");
    }
    else
    {
        console.log("\n");
        console.log("No orders exist");
        console.log("\n");
    }
}

