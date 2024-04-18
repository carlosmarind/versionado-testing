import { describe, expect, test } from "@jest/globals";
import { calcular, dividir, sumar, potencia, } from "../src/calcular";
import app from "../src/server"
import request from "supertest";

export function factorial(numero) {
  // Verificar si el número es negativo
  if (numero < 0) {
    return null; // Si el número es negativo, devolvemos null
  }
  // Caso base: factorial de 0 es 1
  if (numero === 0) {
    return 1;
  } else {
    // Caso recursivo: factorial de n es n * factorial(n-1)
    return numero * factorial(numero - 1);
  }
}

describe("calcular module", () => {

  // Resta
  test("restar 10 menos 1 igual 9", () => {
    expect(10 - 1).toBe(9);
  });

  test("restar 1 menos 1 igual 0", () => {
    expect(1 - 1).toBe(0);
  });

  test('Resta de 5 y 5 es igual a 0', () => {
    expect(calcular("resta", 5, 5)).toEqual({ resultado: 0 });
  });

  // Suma
  test('Suma de 2 y 3 es igual a 5', () => {
    expect(sumar(2, 3)).toBe(5);
  });
  test('Suma de 5 y 5 es igual a 10', () => {
    expect(calcular("suma", 5, 5)).toEqual({ resultado: 10 });
  });

  // Divicion
  test("dividir 10 entre 2 es igual a 2", () => {
    expect(dividir(10, 5)).toBe(2);
  });
  test('dividir por cero devuelve Infinity', () => {
    expect(dividir(10, 0)).toBe(Infinity);
  });
  test('dividir de 15 y 5 es igual a 3', () => {
    expect(calcular("division", 15, 5)).toEqual({ resultado: 3 });
  });

  // Multiplicacion
  test('Multiplicación de 4 y 7 es igual a 28', () => {
    expect(calcular("multiplicacion", 7, 4)).toEqual({ resultado: 28 });
  });
  // Potencia
  test("Potencia de 2 entre 3 es igual a 8", () => {
    expect(potencia(2, 3)).toBe(8);
  });
  test('Potencia de 1 elevado a la 3 es igual a 1', () => {
    expect(potencia(1, 3)).toBe(1);
  });

  // Factorial
  test("Factorial de 10 es igual a 3628800", () => {
    expect(factorial(10)).toBe(3628800);
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