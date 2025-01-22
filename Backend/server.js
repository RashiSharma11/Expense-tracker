import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDb from './config/connectDb.js';
import userRoute from './routes/userRoute.js';
import transectionRoutes from './routes/transectionRoutes.js';

dotenv.config();  // Load environment variables

// Database connection
connectDb();

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1/users", userRoute);
app.use("/api/v1/transection", transectionRoutes);

// Port
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.green.bold);
});
