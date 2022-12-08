import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';
// stream deixa ler o arquivo por partes

export class ImportCategoryController {
  async  handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;
        const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
        await importCategoryUseCase.execute(file);
        return response.send();
    }
}
