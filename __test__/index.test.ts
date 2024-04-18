import { describe, expect, test } from "@jest/globals";
import { calcular, dividir, sumar } from "../src/calcular";
import app from "../src/server"
import request from "supertest";

describe("calcular module", () => {

  test("restar 10 menos 1 igual 9", () => {
    expect(10 - 1).toBe(9);
  });

  test("dividor 10 entre 2 es igual a 2", () => {
    expect(dividir(10 ,5)).toBe(2);
  });

  test("probar hola mundo", async () => {
    return await request(app)
      .get("/")
      .expect('Content-Type', /text/)
      .expect(200)
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("hola mundo");
      })
  });

  test("probar endpoint de operacion", async () => {
    return request(app)
      .post("/calcular")
      .send({ "operacion": "add", "num1": 2, "num2": 3 })
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveProperty("resultado");
        expect(body.resultado).toBe(5);
      })
  });

});