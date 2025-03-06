# Capistock Manager (Backend)
Backend para  "Capistock Manager" una aplicación de control de inventarios  para el proyecto final de RollingCode

[Frontend del proyecto aquí](https://github.com/fbiasuso/capistock-manager-frontend)

## OBJETIVO DEL SISTEMA

Como administrador de un local comercial debo poder hacer un control de stock de los
productos que hay a la venta.
El sistema debe contar con una seccion donde esten todos los productos y le permita al
usuario cargar el stock de los mismos y otra seccion en la que el administrador debe
administrar esos productos.

### Página principal.
La página principal debe tener todos los productos del negocio. Debe contener un filtro
para poder ver los productos por categorias.

### Administrador
El administrador debe poder hacer un crud de productos. Cada producto debe tener
nombre, stock, descripción y fecha de ultimo control de stock.
Tambien debe poder admistrar a los usuarios que se registren en el sistema.

### Secciones
- Quiénes somos
- Contacto

## Especificaciones técnicas.

### General:
- Panel de trello (debe incluir mockup),
- Repositorios de github.
- Back y front deben ser dos repositorios diferentes.
- Contar con un Readme con todas las especificaciones del proyecto.
- Tener un mockup
- Realizar un PDF con la documentación técnica del proyecto
- Sitio completamente responsive

### Definir la estructura de la base de datos:
Crea un modelo de datos en MongoDB para almacenar la información necesaria. Por
ejemplo,  tener colecciones para usuarios y productos. Deben incluir campos como nombre,
correo electrónico, contraseña, roles, productos, etc.

### Configurar la autenticación y autorización:
Implementa el registro y el inicio de sesión utilizando Node.js y Express. Utilizar bibliotecas
como jsonwebtoken para generar tokens JWT y bcrypt para el hash de las contraseñas. 

### Integrar el backend con el frontend:
Conectar el frontend de React.js con el backend de Node.js y Express, utilizando la biblioteca
axios para realizar solicitudes HTTP desde el frontend al backend y viceversa. Definir las
rutas en Express para manejar las solicitudes de API, como obtener los productos, realizar
una compra o reserva, etc.

### Implementar el CRUD de productos:
Desarrolla las funcionalidades de creación, lectura, actualización y eliminación (CRUD) para
los productos. Esto implica crear formularios y vistas que permitan a los usuarios
administradores realizar estas acciones. Asegurarse de proteger estas rutas y
funcionalidades para que solo los usuarios con los permisos adecuados puedan acceder a
ellas.

### Desarrollar la funcionalidad de administrador:
Crear una interfaz para que los usuarios con el rol de administrador puedan ver y gestionar a
los usuarios registrados. Esto puede incluir la capacidad de eliminar usuarios o suspender
sus cuentas.

### Validaciones:
Cada acción que le permitamos hacer al usuario final o administrador debe estar validada.
Ejem. Input. 
Error 404:
El error 404 proviene desde el backend. Cuando se nos dé este estado, desde el frontend
debemos consumirlo y mostrar una página relativa a ese error

### Códigos de estado:
Cada código de estado debe estar bien especificado con su respectivo texto. Esos códigos
debemos consumirlos desde el frontend dependiendo la acción de usuario y debemos
mostrar el texto pertinente. Ejemplo. Códigos de error ---> Mostrar al usuario cual fue el error
y qué debe hacer para poder arreglarlo.
