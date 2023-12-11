const router = require("express").Router();
const passport = require("passport");

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/failed", (req, res) => {
  res.send(401).json({
    message: "A problem occur while connecting",
  });
});

router.get("/google/success", (req, res) => {
  if (req.user) {
    return res.status(200).json({ user: req.user });
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
});

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("https://loginsystem-anzg.onrender.com");
  });
});
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/google/failed",
    successRedirect: "https://loginsystem-anzg.onrender.com/profile",
  })
);

module.exports = router;
