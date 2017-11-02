/**
 * Created by vd on 11/1/17.
 */
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
        clientID: "165579998921-qg1hhtk7eg76igvaha5cgmeaav4sq55j.apps.googleusercontent.com",
        clientSecret: "l8CwO5rkrhim0aWzr62aT05o",
        callbackURL: "http://localhost:3000/auth/google/welcome/"
    },
    function(accessToken, refreshToken, profile, done) {
        /*User.findOrCreate({ userid: profile.id }, { name: profile.displayName,userid: profile.id }, function (err, user) {
            return done(err, user);
        })*/
        console.log("google in auth");
        console.log(profile,accessToken);
        return done(err,profile.id);
    }
));

module.exports = passport;