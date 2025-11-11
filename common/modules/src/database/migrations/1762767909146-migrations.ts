import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1762767909146 implements MigrationInterface {
    name = 'Migrations1762767909146'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "roles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "created_by" uuid, "updated_by" uuid, "deleted_by" uuid, "name" character varying, "code" "public"."roles_code_enum", "description" text, "type" character varying(50) NOT NULL DEFAULT 'custom', "is_active" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c1433d71a4838793a49dcad46a" ON "roles" ("id") `);
        await queryRunner.query(`CREATE INDEX "IDX_e5a52fc6f7a8dae64f645b0914" ON "roles" ("created_at") `);
        await queryRunner.query(`CREATE TABLE "user_tokens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "created_by" uuid, "updated_by" uuid, "deleted_by" uuid, "token" character varying(100) NOT NULL, "is_used" boolean NOT NULL DEFAULT false, "type" "public"."user_tokens_type_enum" NOT NULL, "expires_at" TIMESTAMP NOT NULL, "user_id" uuid NOT NULL, CONSTRAINT "PK_63764db9d9aaa4af33e07b2f4bf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_63764db9d9aaa4af33e07b2f4b" ON "user_tokens" ("id") `);
        await queryRunner.query(`CREATE INDEX "IDX_78a9d3ee8e6f794a256734a43b" ON "user_tokens" ("created_at") `);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "created_by" uuid, "updated_by" uuid, "deleted_by" uuid, "name" character varying(200) NOT NULL, "email" character varying(255) NOT NULL, "emailVerified" boolean NOT NULL DEFAULT false, "displayName" character varying(255), "photoUrl" text, "is_active" boolean NOT NULL DEFAULT false, "password" character varying(255), "firebase_token" text, "firebase_uid" character varying, "meta_token" text, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_2d4a15c7f8b3864a5465fb687ee" UNIQUE ("name", "email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a3ffb1c0c8416b9fc6f907b743" ON "users" ("id") `);
        await queryRunner.query(`CREATE INDEX "IDX_c9b5b525a96ddc2c5647d7f7fa" ON "users" ("created_at") `);
        await queryRunner.query(`CREATE TABLE "user_roles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "created_by" uuid, "updated_by" uuid, "deleted_by" uuid, "user_id" uuid, "role_id" uuid, CONSTRAINT "PK_8acd5cf26ebd158416f477de799" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8acd5cf26ebd158416f477de79" ON "user_roles" ("id") `);
        await queryRunner.query(`CREATE INDEX "IDX_57c0e3aef56ade8d2465c237d8" ON "user_roles" ("created_at") `);
        await queryRunner.query(`CREATE TABLE "customer_sessions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "created_by" uuid, "updated_by" uuid, "deleted_by" uuid, "customer_id" uuid NOT NULL, CONSTRAINT "PK_c684ecbaa67a634723776229c4c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c684ecbaa67a634723776229c4" ON "customer_sessions" ("id") `);
        await queryRunner.query(`CREATE INDEX "IDX_06199bf799fd21e15abd53b3f5" ON "customer_sessions" ("created_at") `);
        await queryRunner.query(`CREATE INDEX "IDX_db8c70768c3b1cd05287034995" ON "customer_sessions" ("customer_id") `);
        await queryRunner.query(`CREATE TABLE "customers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "created_by" uuid, "updated_by" uuid, "deleted_by" uuid, "first_name" character varying(50) NOT NULL, "last_name" character varying(50), "email" character varying(255) NOT NULL, "phone_number" character varying(13) NOT NULL, "country_code" character varying(3) NOT NULL, "password" character varying(255), "email_verified_at" TIMESTAMP WITH TIME ZONE, "is_active" boolean NOT NULL DEFAULT false, "provider" character varying NOT NULL DEFAULT 'EMAIL', "avatar_id" uuid, CONSTRAINT "UQ_d08e15060201dd7cfe2bed06bbd" UNIQUE ("email", "phone_number"), CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_133ec679a801fab5e070f73d3e" ON "customers" ("id") `);
        await queryRunner.query(`CREATE INDEX "IDX_a8fcf679692db1c886e7f15d2b" ON "customers" ("created_at") `);
        await queryRunner.query(`CREATE TABLE "customer_tokens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "created_by" uuid, "updated_by" uuid, "deleted_by" uuid, "token" character varying(100) NOT NULL, "is_used" boolean NOT NULL DEFAULT false, "type" "public"."customer_tokens_type_enum" NOT NULL, "expires_at" TIMESTAMP NOT NULL, "customer_id" uuid NOT NULL, CONSTRAINT "PK_82085a2a1850e02d40a965306ba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_82085a2a1850e02d40a965306b" ON "customer_tokens" ("id") `);
        await queryRunner.query(`CREATE INDEX "IDX_1dba18d269fe5f21f8acc8a4d2" ON "customer_tokens" ("created_at") `);
        await queryRunner.query(`CREATE TABLE "user_sessions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "created_by" uuid, "updated_by" uuid, "deleted_by" uuid, "user_id" uuid NOT NULL, "device_token" character varying, "device_type" character varying, CONSTRAINT "PK_e93e031a5fed190d4789b6bfd83" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e93e031a5fed190d4789b6bfd8" ON "user_sessions" ("id") `);
        await queryRunner.query(`CREATE INDEX "IDX_3c7d38f304121da68fb6b04c01" ON "user_sessions" ("created_at") `);
        await queryRunner.query(`CREATE INDEX "IDX_e9658e959c490b0a634dfc5478" ON "user_sessions" ("user_id") `);
        await queryRunner.query(`ALTER TABLE "user_tokens" ADD CONSTRAINT "FK_9e144a67be49e5bba91195ef5de" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "FK_87b8888186ca9769c960e926870" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "FK_b23c65e50a758245a33ee35fda1" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "customer_sessions" ADD CONSTRAINT "FK_db8c70768c3b1cd05287034995a" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "customer_tokens" ADD CONSTRAINT "FK_603f63d478610e2c71e15dffc57" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_sessions" ADD CONSTRAINT "FK_e9658e959c490b0a634dfc54783" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_sessions" DROP CONSTRAINT "FK_e9658e959c490b0a634dfc54783"`);
        await queryRunner.query(`ALTER TABLE "customer_tokens" DROP CONSTRAINT "FK_603f63d478610e2c71e15dffc57"`);
        await queryRunner.query(`ALTER TABLE "customer_sessions" DROP CONSTRAINT "FK_db8c70768c3b1cd05287034995a"`);
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "FK_b23c65e50a758245a33ee35fda1"`);
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "FK_87b8888186ca9769c960e926870"`);
        await queryRunner.query(`ALTER TABLE "user_tokens" DROP CONSTRAINT "FK_9e144a67be49e5bba91195ef5de"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e9658e959c490b0a634dfc5478"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3c7d38f304121da68fb6b04c01"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e93e031a5fed190d4789b6bfd8"`);
        await queryRunner.query(`DROP TABLE "user_sessions"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1dba18d269fe5f21f8acc8a4d2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_82085a2a1850e02d40a965306b"`);
        await queryRunner.query(`DROP TABLE "customer_tokens"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a8fcf679692db1c886e7f15d2b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_133ec679a801fab5e070f73d3e"`);
        await queryRunner.query(`DROP TABLE "customers"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_db8c70768c3b1cd05287034995"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_06199bf799fd21e15abd53b3f5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c684ecbaa67a634723776229c4"`);
        await queryRunner.query(`DROP TABLE "customer_sessions"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_57c0e3aef56ade8d2465c237d8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8acd5cf26ebd158416f477de79"`);
        await queryRunner.query(`DROP TABLE "user_roles"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c9b5b525a96ddc2c5647d7f7fa"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a3ffb1c0c8416b9fc6f907b743"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_78a9d3ee8e6f794a256734a43b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_63764db9d9aaa4af33e07b2f4b"`);
        await queryRunner.query(`DROP TABLE "user_tokens"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e5a52fc6f7a8dae64f645b0914"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c1433d71a4838793a49dcad46a"`);
        await queryRunner.query(`DROP TABLE "roles"`);
    }

}
