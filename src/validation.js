import { ValidationError, NotFoundError } from "./error.js";

export const validateLibro = function (nombre, autor, categoria, año_publicacion, ISBN) {
    if (!nombre) throw new ValidationError("El campo nombre es requerido");
    if (!autor) throw new ValidationError("El campo autor es requerido");
    if (!categoria) throw new ValidationError("El campo categoria es requerido");
    if (!año_publicacion) throw new ValidationError("El campo año de publicacion es requerido");
    if (!ISBN) {
        throw new ValidationError("El campo ISBN es requerido");
    } else {
        if (isNaN(libro.ISBN)) throw new ValidationError("El campo ISBN debe ser un numero");
    }
}

export const validateId = function (id, result) {
    if (!result || result.length < 1) {
        throw new NotFoundError(`El registro con el id ${id} no existe`);
    }
}

export const validateType = function (element) {
    if (isNaN(element)) throw new ValidationError("El campo debe ser un numero");
}

export const validateISBN = function (ISBN, result) {
    if (!result || result.length < 1) {
        throw new NotFoundError(`El registro con ISBN ${ISBN} no existe`);
    }
}
