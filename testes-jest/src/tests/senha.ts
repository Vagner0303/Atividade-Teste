export function senhaForte(senha: string): boolean {

  if (senha.length < 8) {
    return false;
  }

  let temNumero = false;

  for (let c of senha) {
    if (!isNaN(Number(c))) {
      temNumero = true;
    }
  }

  return temNumero;
}