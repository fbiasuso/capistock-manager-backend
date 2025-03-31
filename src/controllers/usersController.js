import User from '../models/userSchema.js';
import Product from '../models/productSchema.js';

const createUser = async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: 'Error al crear usuario', error });
    }
  };

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios', error });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario', error });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: 'Error al modificar el usuario', error });
  }
};

// Suspender 
const softDeleteUser = async (req, res) => {
  try {
    const suspendedUser = await User.findByIdAndUpdate(
      req.params.id,
      { isActive: false }, 
      { new: true }
    );
    if (!suspendedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(suspendedUser);
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar al usuario', error });
  }
};

const deleteUser = async (req, res) => {
   try {
    const adminId = req.user.id; 
    
    const deletedUser = await User.findByIdAndDelete(req.params.id);
  
    if (!deletedUser) {
        return res.status(404).json({ message: 'Usuario no encontrado.' });
      }

    await Product.updateMany(
    { createdBy: req.params.id }, 
    { createdBy: adminId } 
    );
  
      res.status(200).json({ message: 'Usuario eliminado con éxito', user: deletedUser });
    } catch (error) {
      res.status(403).json({ message: error.message });
    }
};


const usersController = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    softDeleteUser,
    deleteUser,
  };
  
  export default usersController;