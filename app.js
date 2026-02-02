const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const AuthRoutes = require('./routes/Auth.js');
const DbCon = require('./utils/db.js')
const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json())
app.use('/auth',AuthRoutes)

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
