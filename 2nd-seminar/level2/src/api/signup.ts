import { Request, Response } from 'express';

const router = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  return res.status(200).json({
    status: 200,
    message: '유저 생성 성공',
    data: { email, password },
  });
};

module.exports = router;
