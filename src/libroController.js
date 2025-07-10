import { pool } from './database.js';
import { validateLibro, validateId, validateType, validateISBN } from './validation.js';

class LibroController {
    async getAll(req, res) {
        try {
            const [result] = await pool.query('SELECT * from libros');
            res.json(result);
        } catch (error) {
            res.send({ "Se produjo el siguiente error ": error.message });

        }

    }

    async getOne(req, res, next) {
        const id = Number(req.params.id);
        validateType(id, "id");
        try {
            const [result] = await pool.query('SELECT * from libros WHERE id= ?', [id]);
            validateId(id, result);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    async add(req, res, next) {
        const libro = req.body;
        validateLibro(libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.ISBN);
        let nombre = libro.nombre.toLowerCase();
        let autor = libro.autor.toLowerCase();
        let categoria = libro.categoria.toLowerCase();
        let año_publicacion = libro.año_publicacion.toLowerCase();
        let ISBN = libro.ISBN.toUpperCase();
        try {
            const [result] = await pool.query(`INSERT into libros(nombre, autor, categoria, año_publicacion, ISBN) VALUES(? , ?, ? , ?, ?)`, [nombre, autor, categoria, año_publicacion, ISBN]);
            res.json({ "Id insertado ": result.insertId });
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        const ISBN = Number(req.body.ISBN);
        validateType(ISBN, "ISBN");
        try {
            const [result] = await pool.query(`DELETE FROM libros WHERE ISBN=(?)`, [ISBN]);
            validateISBN(ISBN, result.affectedRows);
            res.json({ "Registro eliminado": result.affectedRows });
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        const libro = req.body;
        validateType(libro.id, "Id");
        let nombre = libro.nombre.toLowerCase();
        let autor = libro.autor.toLowerCase();
        let categoria = libro.categoria.toLowerCase();
        let año_publicacion = libro.año_publicacion.toLowerCase();
        let ISBN = libro.ISBN.toUpperCase();
        try {
            const [result] = await pool.query(`UPDATE libros SET nombre=(?), autor=(?), categoria=(?), año_publicacion=(?) , ISBN=(?) WHERE id=(?)`, [nombre, autor, categoria, año_publicacion, ISBN, id]);
            validateId(libro.id, result.changedRows);
            res.json({ "Registro actualizado ": result.changedRows });
        } catch (error) {
            next(error);
        }
    }
}

export const libro = new LibroController();