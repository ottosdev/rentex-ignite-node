import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  synchronize: false,
  logging: false,
  entities: ["src/modules/**/entities/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
  subscribers: [],
  
})

export function createConnection(
  host = 'database'
): Promise<DataSource> {
  return AppDataSource.setOptions({ host }).initialize()
}

// // "createMigration": "npm run typeorm migration:create -n 'migration name'"