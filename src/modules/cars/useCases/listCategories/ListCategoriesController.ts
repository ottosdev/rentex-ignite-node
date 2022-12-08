import { container } from 'tsyringe';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';
import { Request, Response } from 'express';

export class ListCategoriesController {
  async  handle(request: Request, response: Response): Promise<Response> {
        const categoriesUseCase = container.resolve(ListCategoriesUseCase)
        const categories = await categoriesUseCase.execute();
        return response.status(200).json(categories);
    }
}
