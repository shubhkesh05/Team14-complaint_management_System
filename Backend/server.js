const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const ticketRoutes = require('./routes/tickets');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tickets', ticketRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/complaints')
  .then(()=> app.listen(PORT, ()=> console.log('Backend running on', PORT)))
  .catch(err=> console.error('Mongo connection error', err));
