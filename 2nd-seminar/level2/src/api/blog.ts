import { Request, Response } from 'express';

const router = async (req: Request, res: Response) => {
  const { blogId } = req.params;

  return res.status(200).json({
    status: 200,
    messaage: '블로그 조회 성공',
    data: { blogId },
  });
};

module.exports = router;
