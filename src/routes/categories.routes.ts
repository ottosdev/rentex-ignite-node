import { CategoriesRepository } from './../repositories/CategoriesRepository';
import { Response, Router, Request } from 'express';
const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (request: Request, response: Response) => {
    const { name, description } = request.body;

    const categoryAlreadyExists = categoriesRepository.findByName(name);

    if(categoryAlreadyExists) {
        return response.status(400).json({erro: 'Category name already exits'});
    }

   const categories = categoriesRepository.create({name, description});

    return response.status(201).json(categories);
});

categoriesRoutes.get('/', (request: Request, response: Response) => {

    const categories = categoriesRepository.list();
    return response.status(200).json(categories);
}) 

export { categoriesRoutes };
