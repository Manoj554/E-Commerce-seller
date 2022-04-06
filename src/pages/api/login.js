import { serialize } from 'cookie';

export default function setToken(req, res) {
  const token = req.body.token;
  res.setHeader("Set-Cookie", serialize('token', token, {
    httpOnly: true,
    path: '/',
    maxAge: 2 * 60 * 60
  }));
  res.status(200).json({});
}