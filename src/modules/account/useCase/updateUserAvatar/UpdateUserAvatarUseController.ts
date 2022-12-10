import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase';
import { container } from 'tsyringe';
import { Request, Response } from 'express';

export class UpdateUserAvatarUseController {
    async handle(request: Request, response: Response) {
        const { id: user_id} = request.user;
        const avatar_file = request.file.filename;
        // receber arquivo;
        const updateAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);
        await updateAvatarUseCase.execute({
            user_id,
            avatar_file,
        });
        return response.status(204).send();
    }
}
