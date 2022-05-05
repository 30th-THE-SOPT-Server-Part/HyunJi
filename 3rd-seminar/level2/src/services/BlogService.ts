import { BlogCreateDto } from '../interfaces/blog/BlogCreateDto';
import { PostBaseResponseDto } from '../interfaces/comm/PostBaseResponseDto';
import { BlogUpdateDto } from '../interfaces/blog/BlogUpdateDto';
import Blog from '../models/Blog';
import { BlogResponseDto } from '../interfaces/blog/BlogResponseDto';

const currentDate = Date.now();
const createBlog = async (
  blogCreateDto: BlogCreateDto
): Promise<PostBaseResponseDto> => {
  try {
    const blog = new Blog({
      title: blogCreateDto.title,
      content: blogCreateDto.content,
      author: blogCreateDto.author,
      category: blogCreateDto.category,
      date: currentDate,
    });

    await blog.save();

    const data = {
      _id: blog.id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateBlog = async (blogId: string, blogUpdateDto: BlogUpdateDto) => {
  try {
    const updateBlog = {
      title: blogUpdateDto.title,
      content: blogUpdateDto.content,
      author: blogUpdateDto.author,
      category: blogUpdateDto.category,
    };

    await Blog.findByIdAndUpdate(blogId, updateBlog);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const findBlogById = async (blogId: string) => {
  try {
    const blog: BlogResponseDto | null = await Blog.findById(blogId);
    return blog;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteBlog = async (blogId: string) => {
  try {
    await Blog.findByIdAndDelete(blogId);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default { createBlog, updateBlog, findBlogById, deleteBlog };
