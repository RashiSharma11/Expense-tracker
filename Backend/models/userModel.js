import mongoose from 'mongoose';

// Schema design
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
    },
    email: {
      type: String,
      required: [true, 'email is required and should be unique'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
  },
  { timestamps: true }
);

// Create and export the model
const userModel = mongoose.model('users', userSchema);
export default userModel; // Using default export
