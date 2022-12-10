import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreaateUserController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { name, email, driver_license, password } =
            request.body;

        const createUserCase = container.resolve(CreateUserUseCase);
        await createUserCase.execute({name, email, driver_license, password});

        return response.status(201).send()
    }
}
