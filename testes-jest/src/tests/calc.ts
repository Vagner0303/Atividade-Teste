export function soma(a: number, b: number): number {
  return a + b
}
export function sub(a: number, b: number): number {
  return a - b
}
export function mult(a: number, b: number): number {
  return a * b

}
export function div(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida");
  }
  return a / b;
}
