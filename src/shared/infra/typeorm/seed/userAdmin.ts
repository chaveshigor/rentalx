import { hash } from "bcrypt";
import { v4 as uuid } from "uuid";

import { newConnection } from "@shared/infra/typeorm";

async function seedAdminUser() {
  const id = uuid();
  const password = await hash("admin", 8);

  const connection = await newConnection("localhost");

  await connection.query(`
  INSERT INTO users (id, name, email, password, admin, driver_license, created_at)
  values('${id}', 'adminUser', 'admin@example.com', '${password}', 'true', 'abc123', 'now()')
  `);
  await connection.close();
}

seedAdminUser().then(() => {
  console.log("admin user created");
});
