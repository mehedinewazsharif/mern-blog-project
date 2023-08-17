// backend/server.js
//onst { readdirSync } = require("fs");
const path = require("path");
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


const port = process.env.PORT || 8000;


mongoose.connect('mongodb://127.0.0.1:27017/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
//app.options('*', cors())


const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);


//readdirSync("./routes").map(r => app.use("/api", require(`./routes/${r}`))) 



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
