import fs from 'fs'; // file system
import csvParse from 'csv-parse';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { Category } from '../../model/Category';

interface IImportCategory {
    name: string;
    description: string;
}

export class ImportCategoryUseCase {
    constructor(private repositoy: CategoriesRepository){}

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
      return  new Promise((resolve, reject) => {
            const categories: IImportCategory[] = [];
            const stream = fs.createReadStream(file.path); // permite fazer a leitura do arquivo em partes
            const parseFile = csvParse.parse({ delimiter: ',' }); // delimitando por ,
            stream.pipe(parseFile); // responsavel por cada pedaco lido do file acima o pipe consiga mandar para onde espercificarmos.
            parseFile
                .on('data', async (line) => {
                    const [name, description] = line;
                    categories.push({
                        name,
                        description,
                    });
                })
                .on('end', () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                })
                .on('error', (err) => {
                    reject(err);
                });
        });
    }

  async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        categories.map(async category => { // async por causa que precisa percorre todas as categorias e salvar uma por uma.
            const {name, description} = category;
            const existsCategory = this.repositoy.findByName(name);

            if(!existsCategory) {
               this.repositoy.create({
                name, description
               })
            }
        })
    }
}
