/**
 * Created by vd on 11/1/17.
 */
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
        clientID: "client id",
        clientSecret: "secret",
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