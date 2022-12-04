import { CreateCategoryController } from './CreateCategoryController';
import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


const categoryRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

export const categoriesController = new CreateCategoryController(createCategoryUseCase);

