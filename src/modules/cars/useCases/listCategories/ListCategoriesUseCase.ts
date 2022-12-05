import { Category } from '../../entities/Category';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

export class ListCategoriesUseCase {
    constructor(private repository: CategoriesRepository) {}
    execute(): Category[] {
        return this.repository.list();
    }
}


