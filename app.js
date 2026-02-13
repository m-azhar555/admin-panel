const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const AuthRoutes = require('./routes/Auth.js');
const AdminRoutes = require('./routes/Admin.js')
const DbCon = require('./utils/db.js')
const cookiesParser = require('cookie-parser')
const PORT = process.env.PORT || 4000;

const app = express();
app.use(cookiesParser())
app.use(express.json())
app.use('/auth',AuthRoutes)
app.use('/admin',AdminRoutes)

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
