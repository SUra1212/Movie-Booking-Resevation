const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const usersRouter = require("./routes/api/users");
const usersRouter1 = require("./routes/api/user1");
const config = require('config');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const MOVIEto = require('./routes/api/MovieTOS')
const BOOKING = require('./routes/api/Booking')
const PAYMENT = require('./routes/api/PaymentTOS')
const MOBILEPAYMENT = require('./routes/api/MobilePaymentTOS')



// Body parser middleware
app.use(bodyParser.json());
app.use(cors());
app.use(
    express.urlencoded({
        extended: false
    })
);
//route middleware
app.use(MOVIEto);
app.use(BOOKING);
app.use(PAYMENT);
app.use(MOBILEPAYMENT);



app.use(express.json());
// DB Config
const db = config.get('mongoURI');
// Connect to MongoDB
mongoose
    .connect(
        db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", usersRouter);
app.use("/api/user1", usersRouter1);



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));