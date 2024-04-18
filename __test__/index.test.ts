import app from "../src/server";
import request from "supertest";
import { Config } from "jest";
import { describe, expect, test } from "@jest/globals";
import {
  calcular,
  sumar,
  restar,
  multiplicar,
  dividir,
  potencia,
  factorizar,
} from "../src/calcular";

const config: Config = {
  preset: "ts-jest",
  moduleNameMapper: { "^(\\./.*)\\.js$": "$1" },
};

export default config;

describe("calcular module", () => {
  test("llamado de operaciones", () => {
    calcular("suma", 10, 5);
    expect(sumar).toBeCalled;

    calcular("resta", 10, 5);
    expect(restar).toBeCalled;

    calcular("multiplicacion", 10, 5);
    expect(multiplicar).toBeCalled;

    calcular("dividision", 10, 5);
    expect(dividir).toBeCalled;

    calcular("potencia", 10, 5);
    expect(potencia).toBeCalled;

    calcular("factor", 10, 5);
    expect(factorizar).toBeCalled;
  });

  test("funcion sumar", () => {
    expect(sumar(10, 5)).toBe(15);
    expect(sumar(-10, -5)).toBe(-15);
    expect(sumar(0, -3)).toBe(-3);
  });

  test("funcion restar", () => {
    expect(restar(10, 5)).toBe(5);
    expect(restar(-10, -5)).toBe(-5);
    expect(sumar(0, -3)).toBe(-3);
  });

  test("funcion multiplicar", () => {
    expect(multiplicar(10, 5)).toBe(50);
    expect(multiplicar(-10, -5)).toBe(50);
    expect(multiplicar(0, 5)).toBe(0);
    expect(multiplicar(-4, 6)).toBe(-24);
    expect(multiplicar(7, -8)).toBe(-56);
  });

  test("funcion dividir", () => {
    expect(dividir(20, 2)).toBe(10);
    expect(dividir(-20, -2)).toBe(10);
    expect(dividir(3.5, 2)).toBe(1.75);
    expect(dividir(3.5, -2)).toBe(-1.75);
  });

  test("funcion potencia", () => {
    expect(potencia(7, 3)).toBe(343);
    expect(potencia(-9, 4)).toBe(6561);
    expect(potencia(4, -2)).toBe(0.0625);
    expect(potencia(7, 0)).toBe(1);
    expect(potencia(-5, 0)).toBe(1);
  });

  test("funcion factorizar", () => {
    expect(factorizar(3)).toBe(6);
    expect(factorizar(-3)).toBe(1);
  });

  test("probar hola mundo", async () => {
    return await request(app)
      .get("/")
      .expect("Content-Type", /text/)
      .expect(200)
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("hola mundo");
      });
  });

  test("probar endpoint de operacion", async () => {
    return request(app)
      .post("/calcular")
      .send({ operacion: "add", num1: 2, num2: 3 })
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveProperty("resultado");
        expect(body.resultado).toBe(5);
      });
  });
});
