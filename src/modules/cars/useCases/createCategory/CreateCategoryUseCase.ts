import { AppError } from './../../../../errors/AppError';
import { inject, injectable } from 'tsyringe';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}
@injectable()
export class CreateCategoryUseCase {
   
    constructor(
        @inject('CategoriesRepository')
        private categoriesRepository: CategoriesRepository) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists =
            await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            // o service nao tem acesso ao responde.
            // para lancar um error precisamos instanciar o error aqui para o responde capturar;
            throw new AppError('Category alredy exists');
        }

        await this.categoriesRepository.create({ name, description });
    }
}
