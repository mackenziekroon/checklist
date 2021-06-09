const router = require("express").Router();
const { Reminder } = require("../db/models");

// mounted on /reminders

// TEMP: GET PENDING REMINDERS
router.get("/", async (req, res, next) => {
  try {
    const reminders = await Reminder.findAll({
      where: {
        completed: false,
      },
    });
    // console.log("reminders->", reminders);
    res.send(reminders);
  } catch (error) {
    next(error);
  }
});

// GET COMPLETED REMINDERS
router.get("/completed", async (req, res, next) => {
  try {
    let completedReminders = await Reminder.findAll({
      where: {
        completed: true,
      },
    });
    res.send(completedReminders);
  } catch (error) {
    next(error);
  }
});

// ADD NEW REMINDER

router.post("/", async (req, res, next) => {
  try {
    let newReminder = await Reminder.create(req.body);
    res.status(201).send(newReminder);
  } catch (error) {
    next(error);
  }
});

// GET ALL REMINDERS FOR USER ID
// router.get("/", async (req, res, next) => {
//   try {
//     let userId = req.user.id;
//     let reminders = await Reminder.findAll({
//       where: {
//         userId: userId,
//       },
//     });
//     res.send(reminders);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
