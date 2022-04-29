import { Request, Response } from 'express';

const router = async (req: Request, res: Response) => {
  const { blogId } = req.params;

  return res.status(200).json({
    status: 200,
    message: '블로그 좋아요 수 조회 성공',
    data: { blogId },
  });
};

module.exports = router;
