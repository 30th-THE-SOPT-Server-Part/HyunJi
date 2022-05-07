import mongoose from 'mongoose';
import { BlogInfo } from '../interfaces/blog/BlogInfo';

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    name: { type: String },
    subCategory: [
      {
        name: { type: String },
      },
    ],
  },
  date: {
    type: Date,
    required: true,
  },
});

export default mongoose.model<BlogInfo & mongoose.Document>('Blog', BlogSchema);
