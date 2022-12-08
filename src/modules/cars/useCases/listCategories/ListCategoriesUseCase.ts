import { inject, injectable } from 'tsyringe';
import { Category } from '../../entities/Category';
import { ICategoryRepository } from '../../repositories/ICategoriesRepository';

@injectable()
export class ListCategoriesUseCase {
    constructor(
        @inject('CategoriesRepository')
        private repository: ICategoryRepository) {}
    execute(): Promise<Category[]> {
        return this.repository.list();
    }
}


