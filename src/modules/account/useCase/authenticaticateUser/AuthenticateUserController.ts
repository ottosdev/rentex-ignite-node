import { container } from 'tsyringe';
import { AuthenticateUserUseCase } from './AuthenticateUserCase';
import { Request, Response } from 'express';
export class AuthenticateUserController {
    async handle(request:Request, response: Response): Promise<Response> {
        const {email, password} = request.body;

        const authUseCase = container.resolve(AuthenticateUserUseCase)

        const token = await authUseCase.execute({email, password}); 

        return response.status(200).json(token);

    }
}