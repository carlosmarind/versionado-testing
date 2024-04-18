export function calcular(operacion: string, num1: number, num2: number) {
  if (operacion === "suma") {
    return sumar(num1, num2);
  } else if (operacion === "resta") {
    return restar(num1, num2);
  } else if (operacion === "multiplicacion") {
    return multiplicar(num1, num2);
  } else if (operacion === "division") {
    return dividir(num1, num2);
  } else if ((operacion = "potencia")) {
    potencia(num1, num2);
  } else if ((operacion = "factor")) {
    return factorizar(num1);
  }
  return { resultado: "operacion incorrecta" };
}

export function sumar(num1: number, num2: number) {
  return num1 + num2;
}

export function restar(num1: number, num2: number) {
  return num1 - num2;
}

export function multiplicar(num1: number, num2: number) {
  return num1 * num2;
}

export function dividir(num1: number, num2: number) {
  return num1 / num2;
}

export function potencia(num1: number, num2: number) {
  return Math.pow(num1, num2);
}

export function factorizar(num1: number) {
  let numero = 1;
  for (let i = num1; i > 0; i--) {
    numero *= i;
  }
  return numero;
}
