const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: require("./keys").google.CLIENT_ID,
      clientSecret: require("./keys").google.CLIENT_SECRET,
      callbackURL: "/api/auth/google/redirect"
    },
    async (accessToken, refreshToken, profile, next) => {}
  )
);

module.exports = passport;
