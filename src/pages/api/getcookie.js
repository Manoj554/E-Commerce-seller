import cookie from 'cookie';

export default function getCookie(req, res) {
    const cookies = req.headers.cookie;
    if (cookies) {
        const allCookie = cookie.parse(cookies);
        const token = allCookie.token;
        if (token) {
            return res.status(200).json({ found: true, token });
        }
    }
    res.status(200).json({ found: false, token: '' });
}