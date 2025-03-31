import User from "../models/userSchema.js";
import tokenHelper from "../helpers/tokenHelper.js";

const authenticateUser = async (req, res, next) => {
  const token = tokenHelper.extractToken(req);
  if (!token) {
    return res
      .status(401)
      .json({ message: "No autenticado. Token requerido." });
  }

  try {
    const decoded = tokenHelper.verifyToken(token);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    req.user = user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Token inválido o expirado.", error: error.message });
  }
};

export default authenticateUser;
