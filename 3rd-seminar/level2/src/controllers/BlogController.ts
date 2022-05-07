import { Request, Response } from 'express';
import { BlogCreateDto } from '../interfaces/blog/BlogCreateDto';
import { BlogResponseDto } from '../interfaces/blog/BlogResponseDto';
import { BlogUpdateDto } from '../interfaces/blog/BlogUpdateDto';
import message from '../modules/responseMessage';
import statusCode from '../modules/statusCode';
import util from '../modules/util';
import BlogService from '../services/BlogService';

/**
 *  @router POST /blog
 *  @desc Create blog
 *  @access Public
 */
const createBlog = async (req: Request, res: Response): Promise<void> => {
  const blogCreateDto: BlogCreateDto = req.body;
  try {
    const data = await BlogService.createBlog(blogCreateDto);

    res
      .status(statusCode.CREATED)
      .send(
        util.success(statusCode.CREATED, message.CREATE_BLOG_SUCCESS, data)
      );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

/**
 *  @router PUT /blog
 *  @desc Update blog
 *  @access Public
 */
const updateBlog = async (req: Request, res: Response): Promise<void> => {
  const blogUpdateDto: BlogUpdateDto = req.body;
  const { blogId } = req.params;
  try {
    const data = await BlogService.updateBlog(blogId, blogUpdateDto);

    res.status(statusCode.NO_CONTENT).send();
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

/**
 *  @router PUT /blog
 *  @desc Update blog
 *  @access Public
 */
const findBlogById = async (req: Request, res: Response): Promise<void> => {
  const { blogId } = req.params;
  try {
    const data: BlogResponseDto | null = await BlogService.findBlogById(blogId);
    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.READ_BLOG_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

/**
 *  @router DEL /blog
 *  @desc DELETE blog
 *  @access Public
 */
const deleteBlog = async (req: Request, res: Response) => {
  const { blogId } = req.params;
  try {
    await BlogService.deleteBlog(blogId);
    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.DELETE_BLOG_SUCCESS));
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

export default { createBlog, updateBlog, findBlogById, deleteBlog };
