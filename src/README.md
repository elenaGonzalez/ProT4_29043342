# Actividad integradora- REST API

## API para la gestión de libros de una biblioteca

Los campos del modelo Libro son:
- **Id** (Clave primaria) - de tipo entero
- **nombre** : de tipo varchar (longitud máxima 30)
- **autor** : de tipo varchar (longitud máxima 30)
- **categoria** : de tipo varchar (longitud máxima 30)
- **año_publicacion** : de tipo date (formato AAAA-MM-DD)
- **ISBN** : de tipo varchar (longitud máxima 13)


### Rutas ( Enpoints )
- **(GET) /libros** : Permite listar todos los libros disponibles
- **(POST) /libro** : Permite añadir a la base de datos a un libro en particular, según los datos suministrados
- **(GET) /libro/$id_libro** : Permite visualizar los datos de un libro en particular, según el $id_libro enviado como parámetro
- **(DELETE) /libro** : Elimina un libro. Se debe pasar por body el ISBN del libro que se desea eliminar
- **(PUT) /libro** : Edita un libro existente. Se debe pasar por body el id del libro que se desea modificar, al igual que los valores de los campos a ser modificados


**-------------------------------------------------------------------------------------------------**


![Libreria API](libros.jpg)