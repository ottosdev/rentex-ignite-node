import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { ICreateSpecificationDTO } from '../../repositories/ISpecificationsRepository';

export class CreateSpecificationUseCase {
    constructor(private repository: SpecificationsRepository) {}

    execute({ name, description }: ICreateSpecificationDTO): void {
        const specificationAlreadyExists = this.repository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error('Specification already exists');
        }

        this.repository.create({ name, description });
    } 
}
