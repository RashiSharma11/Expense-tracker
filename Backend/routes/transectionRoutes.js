// routes/transectionRoutes.js
import express from 'express';
import { addTransection, getAllTransection } from '../controllers/transectionCtrl.js';

// Create router instance
const router = express.Router();

// POST route for adding a transaction
router.post("/add-transection", addTransection);

// POST route for fetching all transactions
router.post("/get-transection", getAllTransection);

export default router;  // Export the router as default
