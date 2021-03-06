import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSpecificationsCars1627705839742
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "specifications_cars",
        columns: [
          {
            name: "car_id",
            type: "uuid",
          },
          {
            name: "specification_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKspecification_car",
            columnNames: ["car_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "cars",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKcar_specification",
            columnNames: ["specification_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "specifications",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("specifications_cars");
  }
}
