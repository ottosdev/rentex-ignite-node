
import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository{
    private specifications: Specification[];

    constructor() {
        this.specifications = []
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(specification => specification.name === name)
        return specification;
    }

    create({ description, name }: ICreateSpecificationDTO): void {
        const speficification = new Specification();

        Object.assign(speficification, {
            name,
            description,
            created_at: new Date()
        })

        this.specifications.push(speficification);
    }
    
}