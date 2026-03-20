import { validarUsuario } from "./valida";


describe("Testes para validar usuario", () =>{

test("Testa nome e idade validos", () => {
    const usuario = { nome: "João", idade: 20 };
   expect(validarUsuario(usuario)).toBe(true)

})

test("Testa nome vazio", () => {
    const usuario = { nome: "", idade: 20 };
   expect(validarUsuario(usuario)).toBe(false)

})

test("Testa idade menor de 18", () => {
    const usuario = { nome: "David", idade: 17 };
   expect(validarUsuario(usuario)).toBe(false)

})

})
