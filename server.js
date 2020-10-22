const express = require('express');
const port = 4000;
const app = express();
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const passportGoogle = require('./config/passport-google-outh-strategy');
const passportFacebook = require('./config/facbook-outh');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assets'));
app.use(session({
    name: 'Admissons',
    // To be changed at deployment
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (20000 * 60 * 100)
    },
    store: new MongoStore({
        mongooseConnection: db,
        autoRemove: 'disabled'

    }, function(err) {
        if (err) {
            console.log('Error in MongoStore');
        }
    })

}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
// app.use('/uploads', express.static(__dirname + '/uploads'));

app.use('/', require('./routes/index'));
// app.use(session({
//     name: 'sourav',
//     // To be changed at deployment
//     secret: 'blahsomething',
//     saveUninitialized: false,
//     resave: false,
//     cookie: {
//         maxAge: (20000 * 60 * 100)
//     },
//     store: new MongoStore({
//         mongooseConnection: db,
//         autoRemove: 'disabled'

//     }, function(err) {
//         if (err) {
//             console.log('Error in MongoStore');
//         }
//     })

// }));

app.listen(port, function(err) {
    if (err) {
        console.log('Error', err);
        return;
    }

    console.log('Server is running on port ', port);
})