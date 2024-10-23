const express = require('express');
const connectDB = require('./config');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();

const app = express();
const Port = process.env.PORT || 5000;


connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});