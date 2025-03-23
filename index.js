import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
// import database
// import routes

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('¡Hola! El servidor está funcionando correctamente 🎉');
  });


app.listen(PORT,() => {
    console.log(`Servidor ejecutandose en puerto ${PORT}`);
});

