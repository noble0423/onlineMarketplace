const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/inventorydb"
  // {
  //   useMongoClient: true
  // }
);

const inventorySeed = [
  {
    image: "https://www.thebroad.org/sites/default/files/art/brownc_figures_in_a_landscape.jpg",
    title: "Figures in a Landscape 2",
    width: 80,
    height: 90,
    quantity: 25,
    description: "Artist: Cecily Brown. Oil on linen.",
    updated: new Date(Date.now())
  },
  {
    image: "https://www.thebroad.org/sites/default/files/art/close_april.jpg",
    title: "April",
    width: 84,
    height: 100,
    quantity: 5,
    description: "Artist: Chuck Close. Oil on Canvas.",
    updated: new Date(Date.now())
  },
  {
    image: "https://www.thebroad.org/sites/default/files/art/francis-untitled.jpg",
    title: "Untitled (Composition)",
    width: 9.25,
    height: 7.75,
    quantity: 35,
    description: "Artist: Same Francis. Watercolor and gouache on paper.",
    updated: new Date(Date.now())
  },
  {
    image: "https://www.thebroad.org/sites/default/files/art/halleycollision_circuit.jpg",
    title: "Collision Circuit",
    width: 95,
    height: 97.75,
    quantity: 7,
    description: "Artist: Peter Halley. Day-glo acrylic, acrylic and Roll-a-Tex on canvas.",
    updated: new Date(Date.now())
  },
  {
    image: "https://www.thebroad.org/sites/default/files/art/haring_untitled1983catwoman_echelon.jpg",
    title: "Untitled",
    width: 96,
    height: 96,
    quantity: 9,
    description: "Artist: Keith Haring. Vinyl paint on vinyl tarpaulin.",
    updated: new Date(Date.now())
  },
  {
    image: "https://www.thebroad.org/sites/default/files/art/hirst_eb_spin.jpg",
    title: "Happy Birthday Eli Spin",
    width: 48,
    height: 48,
    quantity: 3,
    description: "Artist: Damien Hirst. Household gloss on canvas.",
    updated: new Date(Date.now())
  },
  {
    image: "https://www.thebroad.org/sites/default/files/art/israel_skybackdrop.jpg",
    title: "Sky Backdrop",
    width: 192,
    height: 108,
    quantity: 15,
    description: "Artist: Alex Israel. Acrylic on canvas.",
    updated: new Date(Date.now())
  },
  {
    image: "https://www.thebroad.org/sites/default/files/art/lasker-nonsequitor.jpg",
    title: "Non Sequitur Psyche",
    width: 100,
    height: 75,
    quantity: 20,
    description: "Artist: Jonathan Lasker. Oil on canvas.",
    updated: new Date(Date.now())
  },
  {
    image: "https://www.thebroad.org/sites/default/files/art/scharf-sexadansa.jpg",
    title: "Sexadansa",
    width: 89,
    height: 85,
    quantity: 2,
    description: "Artist: Kenny Scharf. Oil and spray paint on canvas.",
    updated: new Date(Date.now())
  },
  {
    image: "https://www.thebroad.org/sites/default/files/art/stella-shards_iv.jpg",
    title: "Shards IV (3x)",
    width: 134,
    height: 120,
    quantity: 11,
    description: "Artist: Frank Stella. Mixed media on aluminum.",
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

