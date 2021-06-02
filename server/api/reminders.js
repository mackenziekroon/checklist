const router = require("express").Router();
const { Reminder } = require("../db/models");

// mounted on /reminders

// TEMP: GET ALL REMINDERS
router.get("/", async (req, res, next) => {
  try {
    const reminders = Reminder.findAll();
    console.log("reminders->", reminders);
    res.send(reminders);
  } catch (error) {
    next(error);
  }
});

// GET ALL REMINDERS FOR USER ID
router.get("/", async (req, res, next) => {
  try {
    let userId = req.user.id;
    let reminders = await Reminder.findAll({
      where: {
        userId: userId,
      },
    });
    res.send(reminders);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
