import { Category } from '../model/Category';
import { ICategoryRepository, ICreateCategoryDTO } from './ICategoriesRepository';

export class CategoriesRepository implements ICategoryRepository {
    private categories: Category[] = [];

    private static INSTANCE:  CategoriesRepository;

    private constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoriesRepository {
        if(!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository()
        }
        return CategoriesRepository.INSTANCE;
    }

    create({ name, description }:ICreateCategoryDTO): void {
        const categorie: Category = new Category();

        Object.assign(categorie, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(categorie);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find(category => category.name === name);
        return category
    }
}
