const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const config = require('./config');
const { tokenTypes } = require('./tokens');
const { User } = require('../models');

const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

// // serialize and deserialize user
passport.serializeUser((user, done) => {
  console.log("serializeUser: ", user);
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  // In this callback, you would fetch the user from your database using the ID
  console.log("deserializeUser");
  done(null, { user: id });
});


const jwtVerify = async (payload, done) => {
  try {
    if (payload.type !== tokenTypes.ACCESS) {
      throw new Error('Invalid token type');
    }
    const user = await User.findById(payload.sub);
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);


// Google Strategy
const googleStrategy = new GoogleStrategy(
  {
    clientID: config.oauth.google.clientId,
    clientSecret: config.oauth.google.clientSecret,
    callbackURL: config.oauth.google.callbackUrl,
    scope: ['profile', 'email']
  },
  function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
);

// LinkedIn Strategy
const linkedInStrategy = new LinkedInStrategy(
  {
    clientID: config.oauth.linkedin.clientId,
    clientSecret: config.oauth.linkedin.clientSecret,
    callbackURL: config.oauth.linkedin.callbackUrl,
    scope: ['r_emailaddress', 'r_liteprofile'],
  },
  function (token, tokenSecret, profile, done) {
    // You can save user information here
    return done(null, profile);
  }
);

const twitterStrategy = new TwitterStrategy(
  {
    consumerKey: config.oauth.twitter.consumerKey,
    consumerSecret: config.oauth.twitter.consumerSecret,
    callbackURL: config.oauth.twitter.callbackUrl,
    includeEmail: true,
  },
  function (token, tokenSecret, profile, done) {
    // You can save user information here
    return done(null, profile);
  }
);

module.exports = {
  jwtStrategy,
  googleStrategy,
  linkedInStrategy,
  twitterStrategy
};
