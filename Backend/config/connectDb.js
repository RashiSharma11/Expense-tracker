import mongoose from 'mongoose';  // Use `import` syntax
import colors from 'colors';

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://rashi11sharma08:rashi123@cluster0.2chrc.mongodb.net/E-project', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

export default connectDb;  // Use ES module export
