import request from "supertest"
import app from "../../app"

describe("GET /", () => {
  it("adds a successful status", async () => {
    const response = await request(app.callback()).get("/")
    expect(response.status).toBe(200)
  })
})
