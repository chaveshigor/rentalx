import csvParse from "csv-parse";
import fs from "fs";

import { ICategoryRepositories } from "../../repositories/interfaces/ICategoriesRepository";

interface ICategory {
  name: string;
  description: string;
}

class ImportCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRepositories) {}

  loadFile(file: Express.Multer.File): Promise<ICategory[]> {
    return new Promise((resolve, reject) => {
      const allNewCategories: ICategory[] = [];
      const stream = fs.createReadStream(file.path);
      const parseFile = csvParse();
      stream.pipe(parseFile);

      parseFile
        .on("data", (line) => {
          const [name, description] = line;

          allNewCategories.push({ name, description });
        })
        .on("end", () => {
          resolve(allNewCategories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const newCategories = await this.loadFile(file);

    newCategories.map(async (category) => {
      const { name, description } = category;

      const categoryExists = this.categoriesRepository.findByName(name);
      if (!categoryExists) {
        this.categoriesRepository.create({ name, description });
      }
    });
  }
}

export { ImportCategoriesUseCase };
