import { Router } from "express";

import { libro } from "./libroController.js";

export const router = Router();

router.get('/libros', libro.getAll);
router.post('/libro', libro.add);
router.get('/libro/:id', libro.getOne);
router.delete('/libro/:ISBN', libro.delete);
router.put('/libro', libro.update);


