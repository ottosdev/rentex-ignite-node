import { Users } from '../entities/Users';
import { CreateUserDto } from './../dtos/CreateUserDto';

export interface IUserRepository {
    create(data: CreateUserDto) : Promise<void>
    findByEmail(email:string): Promise<Users>;
    findById(id: string): Promise<Users>;
    findByName(name: string): Promise<Users>
}