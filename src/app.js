const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./routes/main');
const apiRoutes = require('./routes/api/main');
const session = require('express-session');
const cookie = require('cookie-parser');
const cors = require('cors')
const isLogged = require('./middlewares/auth')



app.set('port', process.env.PORT || 3000);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(app.get('port'), () => console.log('Running server on https://localhost:'+app.get('port')))

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.json());
app.use(cookie());
app.use(cors());
app.use(session({secret: "secret", saveUninitialized: true, resave: false}));
app.use(isLogged);

app.use(mainRoutes);
app.use('/api',apiRoutes);


