const router = require("express").Router();

module.exports = router;

function isAuthenticated(req, res, next) {
  if (process.env.NODE_ENV === "test" || req.user) {
    return next();
  } else {
    console.log("user not logged in ");
    const err = new Error("Unauthorized: Please Login/Signup");
    err.status = 401;
    // res.redirect('/')
    return next(err);
  }
}

// FOR ALL ROUTES EXCEPT Login/Signup (Which are mounted on /auth path),
// Always check if a logged in User is accessing them.
// If not, throw error
router.all("/*", isAuthenticated, async (req, res, next) => {
  next();
});

router.use("/users", require("./users"));
router.use("/reminders", require("./reminders"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
