const request = require("supertest");
const app = require("../src/server");

test("health returns env and secret flag", async () => {
  process.env.APP_ENV = "test";
  process.env.SECRET_NAME = "dummy";
  const res = await request(app).get("/health");
  expect(res.status).toBe(200);
  expect(res.body.ok).toBe(true);
  expect(res.body.env).toBe("test");
  expect(res.body.secret_name).toBe("set");
});


