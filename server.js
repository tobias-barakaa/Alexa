const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const cors = require("cors");
const cookieParser = require("cookie-parser");
const AdminRoute = require('./routes/admin/adminRoute');
const userRoutes = require('./routes/client/clientRoute');
const writerRoute = require('./routes/writer/writerRoute');
const articleRoutes = require('./routes/client/articleRoute');
const articleAdminRoute = require('./routes/admin/articleAdminRoute');
const adminWritersRoute = require('./routes/admin/adminWritersRoute');

dotenv.config();



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());


app.use('/api/users', userRoutes);
app.use("/api/admin", AdminRoute)
app.use("/api/writer", writerRoute)

app.use('/api/articles', articleRoutes);

// Admin
app.use('/api/admin/articles', articleAdminRoute);
app.use('/api/admin/writers', adminWritersRoute);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});