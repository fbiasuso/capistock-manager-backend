import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    process.env.WT_SECRET_KEY,
    { expiresIn: "1h" }
  );
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
};

const extractToken = (req) => {
  return req.headers.authorization?.split(" ")[1];
};

const tokenHelper = {generateToken, verifyToken, extractToken};
export default tokenHelper;
