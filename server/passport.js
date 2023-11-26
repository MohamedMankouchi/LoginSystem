const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const { users } = require("./users");
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "1087618354052-nif8afru0uk51dm27bmjl92h68s3obf9.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: "89b57eade1c53775b4ab",
      clientSecret: "9d4619218b888a8345c1fea903ae8b7c2c12c880",
      callbackURL: "http://localhost:3000/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
