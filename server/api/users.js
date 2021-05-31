const router = require("express").Router();
const { User } = require("../db/models");

//mounted on /api/users

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "email"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//updates user type as "CANDIDATE" OR "ORGANIZATION"
router.put("/", async (req, res, next) => {
  try {
    let user = req.user.id;
    let updatedUser = await User.update(req.body, {
      where: {
        id: user,
      },
      returning: true,
      plain: true,
    });
    res.send(updatedUser[1]);
  } catch (error) {
    next(error);
  }
});

router.put("/img", async (req, res, next) => {
  let img = { img: req.body };
  try {
    let user = req.user.id;
    let updatedUser = await User.update(img, {
      where: {
        id: user,
      },
      returning: true,
      plain: true,
    });
    res.send(updatedUser[1]);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
