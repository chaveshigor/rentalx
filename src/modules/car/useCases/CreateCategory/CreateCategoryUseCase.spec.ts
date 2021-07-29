import { AppError } from "../../../../shared/errors/appError";
import { CategoryRepositoryInMemory } from "../../infra/inMemory/repositories/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoryRepositoryInMemory;

describe("Create a new category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoryRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });
  const categorySeed = {
    name: "r2-d2",
    description: "the most expensive car",
  };

  it("should be able to create a new category", async () => {
    const newCategory = await createCategoryUseCase.execute(
      categorySeed.name,
      categorySeed.description
    );

    expect(newCategory).toMatchObject({
      name: categorySeed.name,
      description: categorySeed.description,
    });
  });

  it("should not be able to create a category with a name that already exists", async () => {
    expect(async () => {
      const newCategory = await createCategoryUseCase.execute(
        categorySeed.name,
        categorySeed.description
      );

      const repitedCategory = await createCategoryUseCase.execute(
        categorySeed.name,
        categorySeed.description
      );
    }).rejects.toBeInstanceOf(AppError);
  });
});
