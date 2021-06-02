"use strict";

const db = require("../server/db");
const { User, Reminder } = require("./db/models");

const remindersData = [
  {
    title: "title 1",
    completed: false,
  },
  {
    title: "title 2",
    completed: false,
  },
];

const usersData = [
  {
    firstName: "Elisa",
    lastName: "Levet",
    email: "elisa@hotmail.com",
    password: "hola",
  },
  {
    firstName: "Mackenzie",
    lastName: "Kroon",
    email: "mkroon@gmail.com",
    password: "12345?!",
  },
  {
    firstName: "Jessica",
    lastName: "Cotrina",
    email: "jessicacotrina@gmail.com",
    password: "caracoles",
  },
];

async function seed() {
  console.log("inside seed function");
  await db.sync({ force: true });
  console.log("db synced!");

  const [users, reminders] = await Promise.all([
    User.bulkCreate(usersData, { returning: true }),
    Reminder.bulkCreate(remindersData, { returning: true }),
  ]);

  await reminders[0].setUser(users[0]);
  await reminders[1].setUser(users[1]);

  // console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log("seeding...");
  console.log("HERE!!!");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
