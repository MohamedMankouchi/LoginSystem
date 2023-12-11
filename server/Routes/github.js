const router = require("express").Router();
const passport = require("passport");

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get("/github/failed", (req, res) => {
  res.send(401).json({
    message: "A problem occur while connecting",
  });
});

router.get("/github/success", (req, res) => {
  console.log(req.user);
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
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/github/failed",
    successRedirect: "https://loginsystem-anzg.onrender.com/profile",
  })
);

module.exports = router;
