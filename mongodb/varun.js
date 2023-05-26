const prompt = require('prompt-sync')();
const dbConnection = require("./Connection")
//const choice = prompt('Enter the choice you want1)Create 2)Read 3)Update 4)Delete 5)List all orders 6)list bystatus ');
const choice = prompt('Enter the choice you want 1)Create 2)Read 3)Update 4)Delete 5)List all orders 6)list by status ');
console.log(choice);
if (choice == "1") {
  var order_id = prompt("enter the order id :")
  var customer_name = prompt("enter the customer name :")
  var customer_email = prompt("enter the customer email :")
  var customer_address = prompt("enter the customer address :")
  var product_name = prompt("enter the product name :")
  var quantity = parseInt(prompt("enter the quantity :"))
  var total_price = parseInt(prompt("enter the total price :"))
  var order_status = prompt("enter the order status :")
  async function insert() {
    var obj = {
      "order_id": order_id,
      "customer_name": customer_name,
      "customer_email": customer_email,
      "customer_address": customer_address,
      "product_name": product_name,
      "quantity": quantity,
      "total_price": total_price,
      "order_status": order_status
    }
    const db = await dbConnection() //promise is returned so useawait
    var data = await db.find({
      "order_id": order_id
    }).toArray();
    if (data.length > 0) {
      console.log("Data is already in the database");
    } else {
      const result = await db.insertOne(obj);
      if (result.acknowledged) {
        console.log("Inserted successfully")
      }
    }
  }
  insert();
}
if (choice == "2") {
  var order_id = prompt("enter the order id")
  async function read() {
    var data = await dbConnection()
    data = await data.find({
      "order_id": order_id
    }).toArray();
    if (data.length == 0) {
      console.log("No data found")
    }
    else {
      console.log('data', data);
    }
  }
  read();
}
if (choice == "3") {
  async function update() {
    const db = await dbConnection()
    var order_id = prompt("enter the order id to update :")
    console.log("enter the new details")
    var customer_name = prompt("enter the customer name :")
    var customer_email = prompt("enter the customer email :")
    var customer_address = prompt("enter the customer address :")
    var product_name = prompt("enter the product name :")
    var quantity = parseInt(prompt("enter the quantity :"))
    var total_price = parseInt(prompt("enter the total price :"))
    var order_status = prompt("enter the order status :")
    const result = await db.updateOne({ "order_id": order_id },
      {
        $set: {
          "order_id": order_id,
          "customer_name": customer_name,
          "customer_email": customer_email,
          "customer_address": customer_address,
          "product_name": product_name,
          "quantity": quantity,
          "total_price": total_price,
          "order_status": order_status
        }
      }
    )
    if (result.acknowledged && result.modifiedCount > 0) {
      console.log("Updated the database")
    }
    else {
      console.log("Not Updated in the database")
    }
  }
  update()
}
if (choice == "4") {
  async function deleted() {
    const db = await dbConnection();//returns response as promise
    var order_id = prompt("enter the order id to delete :")
    const result = await db.deleteOne({ "order_id": order_id })
    //const result=await db.deleteMany({name:"KIVI"})
    if (result.acknowledged && result.deletedCount > 0) {
      console.log("Deleted the record in database")
      // console.log(result);
    }
    else {
      console.log("Record not present in database")
    }
  }
  deleted();
}
if (choice == "5") {
  async function display() {
    let data = await dbConnection();
    data = await data.find().toArray();
    console.log('data', data);
  }
  display()
  // process.exit()
}
if (choice == "6") {
  var status = prompt("Enter the status to find the orders :")
  async function displaybystatus() {
    let data = await dbConnection();
    data = await data.find({
      "order_status": status
    }).toArray();
    console.log('data', data);
  }
  displaybystatus()
}