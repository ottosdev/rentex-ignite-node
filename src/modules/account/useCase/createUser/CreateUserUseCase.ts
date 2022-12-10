import { AppError } from './../../../../errors/AppError';
import { CreateUserDto } from './../../dtos/CreateUserDto';
import { IUserRepository } from './../../repository/IUserRepository';
import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';
@injectable()
export class CreateUserUseCase {
    constructor(
        @inject('UserRepository')
        private userReposity: IUserRepository
    ) {}

    async execute({
        name,
        password,
        driver_license,
        email,
    }: CreateUserDto): Promise<void> {
        const userNameExists = await this.userReposity.findByName(name);

        if (userNameExists) {
           throw new AppError('Name already exist')
        }

        const passwordHash = await hash(password, 8);
        this.userReposity.create({
            name,
            password: passwordHash,
            driver_license,
            email,
        });
    }
}
