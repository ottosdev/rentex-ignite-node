import { Response, Router, Request } from 'express';
import { categoriesController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
const categoriesRoutes = Router();

categoriesRoutes.post('/', (request: Request, response: Response) => {
    return categoriesController.handle(request,response);
});

categoriesRoutes.get('/', (request: Request, response: Response) => {
    return listCategoriesController.handle(request, response);
}) 

export { categoriesRoutes };
