import { ListCategoriesUseCase } from './ListCategoriesUseCase';
import { Request, Response } from 'express';

export class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
    handle(request: Request, response: Response) {
        const categories = this.listCategoriesUseCase.execute();
        return response.status(200).json(categories);
    }
}
