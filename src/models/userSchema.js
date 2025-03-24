import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'El nombre es obligatorio'], 
        minlength: [3, 'El nombre no puede ser menor a 3 caracteres'], 
        maxlength: [10, 'El nombre no puede ser mayor a 10 caracteres'],
        trim: true, 
    },
    email: { type: String,
        required: [true, 'El email es obligatorio'], 
        unique: true, 
        minlength: [5, 'El email no puede ser menor a 5 caracteres'], 
        maxlength: [30, 'El email no puede ser mayor a 30 caracteres'],
        lowercase: true,
        trim: true,
        validate: {
            validator: function (value) {
              
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: (props) => `${props.value} no es un email válido`,
          }, 
    },
    password: { 
        type: String, 
        required: [true, 'La contraseña es obligatoria'], 
        minlength: [8, 'La contraseña no puede ser menor a 8 caracteres'], 
        maxlength: [12, 'La contraseña no puede ser mayor a 12 caracteres'],
        trim: true, 
    },
    role: { 
        type: String, 
        enum: {
            values: ['administrator', 'collaborator', 'user'], 
            message: '{VALUE} no es un rol válido',    
        },
        default: 'user', 
    },
    isActive: { 
        type: Boolean, 
        default: true,
    },
  });
  
  const User = mongoose.model('User', userSchema);

  export default User;