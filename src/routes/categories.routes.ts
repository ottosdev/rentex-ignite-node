import { CategoriesRepository } from './../repositories/CategoriesRepository';
import { CreateCategoryService } from './../services/CreateCategoryService';
import { Response, Router, Request } from 'express';
const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (request: Request, response: Response) => {
    const { name, description } = request.body;
    const createService = new CreateCategoryService(categoriesRepository);

    createService.execute({name, description});
    
    return response.status(201).send();
});

categoriesRoutes.get('/', (request: Request, response: Response) => {

    const categories = categoriesRepository.list();
    return response.status(200).json(categories);
}) 

export { categoriesRoutes };
