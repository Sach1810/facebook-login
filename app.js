var express = require('express');
var passport = require('passport');
var FacebookStratergy = require('passport-facebook').Strategy;
var expressSession = require('express-session');

var app = express();

app.use(expressSession({ secret: 'mySecretKey'}));

app.use(passport.initialize());
app.use(passport.session());