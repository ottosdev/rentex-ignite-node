import { AppDataSource } from '../../../../database/data-source';
import { Repository } from 'typeorm';
import { Category } from '../../entities/Category';
import {
    ICategoryRepository,
    ICreateCategoryDTO,
} from '../ICategoriesRepository';

export class CategoriesRepository implements ICategoryRepository {
    private repository: Repository<Category>;

    // private static INSTANCE: CategoriesRepository;

    constructor() {
        this.repository = AppDataSource.getRepository(Category);
    }

    // public static getInstance(): CategoriesRepository {
    //     if (!CategoriesRepository.INSTANCE) {
    //         CategoriesRepository.INSTANCE = new CategoriesRepository();
    //     }
    //     return CategoriesRepository.INSTANCE;
    // }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            name,
            description,
        });

        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        return this.repository.find();
    }

    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne({ where: { name } });
        return category;
    }
}
