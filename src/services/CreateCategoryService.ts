import { CategoriesRepository } from './../repositories/CategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}

export class CreateCategoryService {
    constructor(private categoriesRepository: CategoriesRepository){}

    execute({name, description}: IRequest): void{
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            // o service nao tem acesso ao responde.
            // para lancar um error precisamos instanciar o error aqui para o responde capturar;
            throw new Error('Category alredy exists');
        }
 
        this.categoriesRepository.create({ name, description });
    }
}
