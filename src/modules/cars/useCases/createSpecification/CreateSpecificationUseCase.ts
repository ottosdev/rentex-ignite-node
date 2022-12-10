import { AppError } from './../../../../errors/AppError';
import { ISpecificationsRepository } from './../../repositories/ISpecificationsRepository';
import { inject, injectable } from 'tsyringe';
import { ICreateSpecificationDTO } from '../../repositories/ISpecificationsRepository';

@injectable()
export class CreateSpecificationUseCase {
    constructor(
        @inject('SpecificationsRepository')
        private repository: ISpecificationsRepository) {}

   async execute({ name, description }: ICreateSpecificationDTO): Promise<void> {
        const specificationAlreadyExists = await this.repository.findByName(name);

        if (specificationAlreadyExists) {
            throw new AppError('Specification already exists');
        }

        await this.repository.create({ name, description });
    } 
}
