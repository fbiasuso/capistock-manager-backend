import validateCreator from "../helpers/validateCreator.js";
import Product from "../models/productSchema.js";

const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: "Error al crear producto", error });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener productos", error });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto", error });
  }
};

/* onst updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: 'Error al modificar el producto', error });
  }
}; */

const updateProduct = async (req, res) => {
  try {
    const { role } = req.user;
    const { id } = req.params;
    const productData = req.body;

    let product;

    if (role === "user") {
      product = await validateCreator(req.user.id, id);
    } else {
      product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado." });
      }
    }

    Object.assign(product, productData);

    await product.save();

    res
      .status(200)
      .json({ message: "Producto actualizado con éxito", product });
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};

/* const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado.' });
    }

    res.status(200).json({ message: 'Producto eliminado con éxito', product: deletedProduct });
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};
 */

const deleteProduct = async (req, res) => {
  try {
    const { role } = req.user;
    const { id } = req.params;

    let product;

    if (role === "user") {
      product = await validateCreator(req.user, id);
    } else {
      product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado." });
      }
    }

    await product.remove();

    res.status(200).json({ message: "Producto eliminado con éxito", product });
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};
const productsController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};

export default productsController;
