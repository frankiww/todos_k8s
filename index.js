const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(express.json());

//подключение к бд
mongoose.connect('mongodb://mongo-service:27017/todos')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/todos', todoRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// trigger
