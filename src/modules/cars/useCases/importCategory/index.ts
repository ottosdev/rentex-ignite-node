import { CategoriesRepository } from './../../repositories/implementations/CategoriesRepository';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';
import { ImportCategoryController } from './ImportCategoryController';


const categoriesRepository = new CategoriesRepository()
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
export const importCategoryController = new ImportCategoryController(
    importCategoryUseCase
);
