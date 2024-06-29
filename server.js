const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const cors = require("cors");
const cookieParser = require("cookie-parser");
const AdminRoute = require('./routes/admin/adminRoute');
const { initialAdminSetup } = require('./controllers/admin/adminController');

dotenv.config();



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/api/admin", AdminRoute)

// app.use('/api/users', userRoutes);
// app.use('/api/schools', schoolsRoutes);
// app.use('/api/counties', countiesRoutes);
// app.use('/api/conversations', conversationsRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});