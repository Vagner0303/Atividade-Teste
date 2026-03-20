import { soma, sub, mult, div } from "./calc";

describe("Testes da função de soma", () =>{

test("Somar dois numeros positivos", () => {
   expect(soma(2,2)).toBe(4)

})

test("Soma dois números negativos", () => {
  expect(soma(-2, -3)).toBe(-5);
})

test("Soma numeros com casas decimais", () => {
expect(soma(2.25, 2.25)).toBe(4.50)

})

test("Soma numeros decimais", () => {
expect(soma(0.1, 0.2)).not.toBe(0.3)

})
})



describe("Testes da função de subtração", () =>{

test("Subtrai dois numeros positivos", () => {
   expect(sub(2, 2)).toBe(0)

})

test("Subtrai dois números negativos", () => {
  expect(sub(-2, -3)).toBe(1);
})

test("Subtrai numeros com casas decimais", () => {
expect(sub(2.25, 1.25)).toBe(1)

})
})



describe("Testes da função de multiplicação", () =>{

test("Multiplica dois numeros positivos", () => {
   expect(mult(2, 2)).toBe(4)

})

test("Multiplica dois números negativos", () => {
  expect(mult(-2, -3)).toBe(6);
})

test("Multiplica numeros com casas decimais", () => {
expect(mult(2.25, 1.25)).toBe(2.8125)

})
})



describe("Testes da função de divisão", () => {

  test("Divide dois numeros positivos", () => {
    expect(div(2, 2)).toBe(1);
  })

  test("Divide dois números negativos", () => {
    expect(div(-2, -3)).toBe(0.6666666666666666);
  })

  test("Não deve permitir divisão por zero", () => {
    expect(() => div(2, 0)).toThrow("Divisão por zero não é permitida");

})
})
