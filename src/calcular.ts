export function calcular(operacion: string, num1: number, num2: number) {
    if (operacion === "suma") {
        return { resultado: num1 + num2 };
    } else if (operacion === "resta") {
        return { resultado: num1 - num2 };
    } else if (operacion === "multiplicacion") {
        return { resultado: num1 * num2 };
    } else if (operacion === "division") {
        return { resultado: num1 / num2 };
    }
    return { resultado: "operacion incorrecta" };
}

export function sumar(num1: number, num2: number) {
    return num1 + num2;
}

export function dividir(num1: number, num2: number) {
    if(num1 === 0 || num2 === 0) {
        throw new Error("No se puede dividir por 0");
    }
    return num1 / num2;
}


