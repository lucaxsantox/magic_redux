export function adicionarCarrinho(cartas) {
  return {
    type: "ADICIONAR_CARRINHO",
    cartas,
  };
}

export function toggleFrase(frases) {
  return {
    // é obrigatorio passar um type para a action
    type: "TOGGLE_FRASE",
    // aqui é o valor recebido do botão e enviado para onde quisermos
    frases,

  };
}