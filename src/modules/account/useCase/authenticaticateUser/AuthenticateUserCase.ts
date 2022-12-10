import { AppError } from './../../../../errors/AppError';
import { UserRepository } from './../../repository/implementations/UserRepository';
import { inject, injectable } from 'tsyringe';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}
@injectable()
export class AuthenticateUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: UserRepository
    ) {}
    async execute({ email, password }: IRequest): Promise<IResponse> {
        // verificar se o usuario existe
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new AppError('Email or password incorret');
        }
        // se a senha esta correta
        const passMatch = await compare(password, user.password);

        if (!passMatch) {
            throw new AppError('Email or password incorret');
        }
        //gerar o jsonwebtoken
        const token = sign({}, '266a1f7c2e2345169d3bc448da45eae6', {
            subject: user.id,
            expiresIn: '1d',
        });

        const tokenReturn: IResponse = {
            user: {
                name: user.name,
                email: user.email,
            },
            token,
        };

        return tokenReturn;
    }
}
