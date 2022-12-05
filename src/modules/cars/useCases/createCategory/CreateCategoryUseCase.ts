import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}

export class CreateCategoryUseCase {
    constructor(private categoriesRepository: CategoriesRepository) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists =
            await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            // o service nao tem acesso ao responde.
            // para lancar um error precisamos instanciar o error aqui para o responde capturar;
            throw new Error('Category alredy exists');
        }

        this.categoriesRepository.create({ name, description });
    }
}
