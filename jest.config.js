const request = require("supertest");
const app = require("../src/app");

describe("Testando API de Posts", () => {
    it("Deve listar os posts", async () => {
        const res = await request(app).get("/api/posts");
        expect(res.statusCode).toBe(200);
    });
});
