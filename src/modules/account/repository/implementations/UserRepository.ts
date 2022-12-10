import { AppDataSource } from './../../../../database/data-source';
import { Repository } from 'typeorm';
import { CreateUserDto } from './../../dtos/CreateUserDto';
import { IUserRepository } from '../IUserRepository';
import { Users } from '../../entities/Users';
import { AppError } from '../../../../errors/AppError';

export class UserRepository implements IUserRepository {
    private repository: Repository<Users>;

    constructor() {
        this.repository = AppDataSource.getRepository(Users);
    }
    async findByName(name: string): Promise<Users> {
        const user = this.repository.findOne({ where: { name } });
        return user;
    }
    async findById(id: string): Promise<Users> {
        const user = await this.repository.findOne({ where: { id } });
        return user;
    }
    async findByEmail(email: string) {
        const user = await this.repository.findOne({ where: { email } });
        return user;
    }
    async create({
        name,
        driver_license,
        email,
        password,
        id,
        avatar
    }: CreateUserDto): Promise<void> {

        const user = this.repository.create({
            name,
            driver_license,
            email,
            password,
            avatar,
            id
        });

        await this.repository.save(user);
    }
}
