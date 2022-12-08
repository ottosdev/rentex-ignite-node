import { SpecificationsRepository } from './../../modules/cars/repositories/implementations/SpecificationsRepository';
import { CategoriesRepository } from './../../modules/cars/repositories/implementations/CategoriesRepository';
import { ICategoryRepository } from './../../modules/cars/repositories/ICategoriesRepository';
import { container } from 'tsyringe';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';

// ICategoriesRepository
container.registerSingleton<ICategoryRepository>(
    'CategoriesRepository',
    CategoriesRepository
);
container.registerSingleton<ISpecificationsRepository>(
    'SpecificationsRepository',
    SpecificationsRepository
);
