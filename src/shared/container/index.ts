import { CategoriesRepository } from './../../modules/cars/repositories/implementations/CategoriesRepository';
import { ICategoryRepository } from './../../modules/cars/repositories/ICategoriesRepository';
import { container } from 'tsyringe';

// ICategoriesRepository
container.registerSingleton<ICategoryRepository>('CategoriesRepository', CategoriesRepository);
