const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/inventorydb",
  // {
  //   useMongoClient: true
  // }
);

const inventorySeed = [
  {
    title: "test",
    width: 5,
    height: 7,
    quantity: 25,
    description: "test description",
    updated: new Date(Date.now())
  },
  {
    title: "test2",
    width: 25,
    height: 27,
    quantity: 5,
    description: "test 2 description",
    updated: new Date(Date.now())
  },
  {
    title: "test3",
    width: 35,
    height: 37,
    quantity: 35,
    description: "test 3 description",
    updated: new Date(Date.now())
  }
];

db.Inventory
  .remove({})
  .then(() => db.Inventory.collection.insertMany(inventorySeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });

