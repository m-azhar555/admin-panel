const express = require('express')
const dotenv = require('dotenv');
const AuthRoutes = require('./routes/Auth.js');
const DbCon = require('./utils/db.js')
dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();
app.use('/auth',AuthRoutes)
app.use(express.json())

const start = async () => {
  try {
    await DbCon(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
