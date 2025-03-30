import Product from "../models/productSchema";
import User from "../models/userSchema";

const validateCreator = async (userId, productId) => {
  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado." });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    if (product.createdBy !== user.id) {
       return res.status(403).json({ message: "Acceso denegado. No puedes modificar o eliminar este producto." });  
    }

    return product;

  } catch (error) {
    return res
    .status(403)
    .json({ message: "Acceso denegado. No puedes modificar o eliminar este producto.", error: error.message });

  }
};

export default validateCreator;