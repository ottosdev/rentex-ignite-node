export class AppError {
    public readonly message: string;
    public readonly status: number;

    constructor(messsage: string, statusCode = 400) {
        this.message = messsage;
        this.status = statusCode;
    }
}
