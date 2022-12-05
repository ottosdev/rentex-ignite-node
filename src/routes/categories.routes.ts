import { importCategoryController } from './../modules/cars/useCases/importCategory/index';
import { Response, Router, Request } from 'express';
import  categoriesController  from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import multer from 'multer';
const categoriesRoutes = Router();

const upload = multer({
    dest: './tmp'
})

categoriesRoutes.post('/', (request: Request, response: Response) => {
    return categoriesController().handle(request, response);
});

categoriesRoutes.get('/', (request: Request, response: Response) => {
    return listCategoriesController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file') ,(request: Request, response: Response) => {
    return importCategoryController.handle(request, response);
});
 
export { categoriesRoutes };
