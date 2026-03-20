type Usuario = {
  nome: string;
  idade: number;
};

export function validarUsuario(usuario: Usuario): boolean {
  if (!usuario.nome || usuario.nome.trim() === "") {
    return false;
  }

  if (usuario.idade < 18) {
    return false;
  }

  return true;
}