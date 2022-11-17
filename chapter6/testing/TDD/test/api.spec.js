const request = require("supertest");
const app = require("../app");

// endpoint GET /
describe("base.index function", () => {
  // case success
  test("Return status: 200 and a hello world message", async () => {
    try {
      const res = request(app).get("/");

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("Hello World!");
    } catch (err) {
      console.log(err);
    }
  });
});

// endpoint POST /sum
describe("sum.index function", () => {
  test("res.json return result of x + y", async () => {
    try {
      const x = 10;
      const y = 12;
      const result = x + y;

      const res = (await request(app).post("/api/sum")).send({ x, y });

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("parameters summarized");
      expect(res.body.data).toStrictEqual({
        x,
        y,
        result,
      });
    } catch (err) {
      console.log(err);
    }
  });
});
