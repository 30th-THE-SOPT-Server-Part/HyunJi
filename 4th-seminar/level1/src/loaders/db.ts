import mongoose from 'mongoose';
import config from '../config';
import Movie from '../models/Movie';
import Review from '../models/Review';

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);

    mongoose.set('autoCreate', true);

    console.log('Mongoose Connected ...');

    Movie.createCollection().then((collection) => {
      console.log('Movie Collection Created');
    });

    Review.createCollection().then((collection) => {
      console.log('Review Collection Created');
    });
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
