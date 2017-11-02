/**
 * Created by vd on 11/1/17.
 */
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
});
    passport.deserializeUser((user, done) => {
        done(null, user);
});
    passport.use(new GoogleStrategy({
            clientID: "165579998921-qg1hhtk7eg76igvaha5cgmeaav4sq55j.apps.googleusercontent.com",
        clientSecret:"l8CwO5rkrhim0aWzr62aT05o",
        callbackURL:"http://127.0.0.1:3000/auth/google/callback"
},
    (token, refreshToken, profile, done) => {
        return done(null, {
            profile: profile,
            token: token
        });
    }));
};