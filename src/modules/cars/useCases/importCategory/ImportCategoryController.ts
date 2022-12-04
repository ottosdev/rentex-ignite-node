import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';
// stream deixa ler o arquivo por partes


export class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCategoryUseCase) {}
    handle(request: Request, response: Response) {
        const { file } = request;
        this.importCategoryUseCase.execute(file);
        return response.send();
    }
}
