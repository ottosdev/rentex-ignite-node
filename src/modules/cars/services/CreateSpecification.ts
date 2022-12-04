import { ICreateSpecificationDTO } from './../repositories/ISpecificationsRepository';
import { SpecificationsRepository } from "../repositories/SpecificationsRepository";

export class CreateStecificationService {
    constructor(
        private repository: SpecificationsRepository
    ){}

    execute({name, description}: ICreateSpecificationDTO){

        const specificationAlreadyExists = this.repository.findByName(name);

        if(specificationAlreadyExists) {
            throw new Error("Specification already exists");
        }

        this.repository.create({name,description});

    }
}