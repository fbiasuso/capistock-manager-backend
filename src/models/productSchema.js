import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre del producto es obligatorio'],
    minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
    maxlength: [10, 'El nombre no puede superar los 10 caracteres'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'La descripción del producto es obligatoria'],
    minlength: [5, 'La descripción debe tener al menos 5 caracteres'],
    maxlength: [50, 'La descripción no puede superar los 50 caracteres'],
    trim: true,
  },
  category: {
    type: String,
    required: [true, 'La categoría es obligatoria'],
    minlength: [3, 'La categoría debe tener al menos 3 caracteres'],
    maxlength: [15, 'La categoría no puede superar los 15 caracteres'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'El precio del producto es obligatorio'],
    min: [0, 'El precio no puede ser menor a 0'],
    max: [999999, 'El precio no puede superar los 999999'],
    validate: {
        validator: (value) => {
            return /^\d+(\.\d{1,2})?$/.test(value.toString());
        },
        message: 'El precio debe ser un número válido con hasta 2 decimales (ejemplo: 15.37)',
      },
  },
  quantity: {
    type: Number,
    required: [true, 'La cantidad es obligatoria'],
    min: [0, 'La cantidad no puede ser menor a 0'],
    validate: {
      validator: (value) => Number.isInteger(value),
      message: 'La cantidad debe ser un número entero',
    },
  },
  supplier: {
    type: String,
    required: [true, 'El proveedor es obligatorio'],
    trim: true,
  },
  addedDate: {
    type: Date,
    required: [true, 'La fecha de carga es obligatoria'],
    default: Date.now, 
  },
  lastStockControlDate: {
    type: Date,
    default: null, 
  },
  lastUpdatedDate: {
    type: Date,
    default: null, 
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: [true, 'El campo es obligatorio. Cada producto debe estar vinculado a un usuario'],
  },
});

const Product = mongoose.model('Product', productSchema);

export default Product;