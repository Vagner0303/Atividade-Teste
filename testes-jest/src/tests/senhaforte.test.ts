import { senhaForte } from "./senha";

describe("Validação de senha forte", () => {

  test("Senha válida", () => {
    expect(senhaForte("abc12345")).toBe(true);
  });

  test("Senha curta", () => {
    expect(senhaForte("abc12")).toBe(false);
  });

  test("Senha sem número", () => {
    expect(senhaForte("abcdefgh")).toBe(false);
  });

});