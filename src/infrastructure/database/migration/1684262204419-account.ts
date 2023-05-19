import { MigrationInterface, QueryRunner } from "typeorm"

export class Account1684262204419 implements MigrationInterface {
  name = "Account1684262204419"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "account" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "balance" integer NOT NULL, "direction" character varying NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "account"`)
  }
}
