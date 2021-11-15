import express from 'express';
import session from 'express-session';
import usuariosRouter from '../routes/usuario.routes';
import productosRouter from '../routes/productos.routes';
import carritoRouter from '../routes/carrito.routes';
import passport from '../services/passport';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 6000 } }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', usuariosRouter);
app.use('/productos', productosRouter);
app.use('/carrito', carritoRouter);

export default app;
