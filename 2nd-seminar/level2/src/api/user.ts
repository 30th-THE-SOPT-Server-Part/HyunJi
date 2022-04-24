import { Request, Response } from 'express';

const router = async (req: Request, res: Response) => {
  const { userId } = req.params;

  return res.status(200).json({
    status: 200,
    message: '유저 조회 성공',
    data: { userId },
  });
};

module.exports = router;
