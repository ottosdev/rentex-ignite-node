import { Request, Response, Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateStecificationService } from '../modules/cars/services/CreateSpecification';

const specificationsRoutes = Router();

const repository = new SpecificationsRepository();

specificationsRoutes.post('/', (request:Request, response: Response) => {
    const {name, description} = request.body;
    
    const service = new CreateStecificationService(repository);

    service.execute({name, description});

    return response.status(201).send()
})

export {specificationsRoutes};