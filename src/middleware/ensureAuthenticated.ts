import { AppError } from './../errors/AppError';
import { UserRepository } from './../modules/account/repository/implementations/UserRepository';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IDecodedToken {
    iat: number;
    exp: number;
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    // Bearer token

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError('Token missing', 401);
    }

    const [bearer, token] = authHeader.split(' ');

    try {
        const {sub: user_id} = verify(token, '266a1f7c2e2345169d3bc448da45eae6') as IDecodedToken;
        
        const userRepository = new UserRepository();

        const user = await userRepository.findById(user_id);

        if(!user) {
            throw new AppError("User does not exists.", 401)
        }

        request.user = {
            id: user_id
        };
        next()
    } catch (error) {
        throw new AppError('Invalid Token', 401);
    }
}
