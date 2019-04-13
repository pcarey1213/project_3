const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database') 
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const app = express()
const PORT = 3001
// Route requires
const user = require('./routes/user')

// Define middleware here
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)
// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Routes
app.use('/user', user)
app.use('/category', category)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})

