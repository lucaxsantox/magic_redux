const ESTADO_INICIAL = {
  carta: [{}],
  feed: [
    {
      id: 1,
      descricao: "Black Lotus",
      preco: "R$830.500,00",
      imagem: "https://www.lmcorp.com.br/arquivos/in/magic/238/5f4243882b972-7qj4bk-nvs5g0-19055be5ac0bf0e333b42e1965c78eff.jpg",
    },
    {
      id: 2,
      descricao: "Time Walk",
      preco: "R$95.000,00",
      imagem: "https://www.lmcorp.com.br/arquivos/in/magic/358/5f4243dd24064-24qoxk-v2z3kr-c81e728d9d4c2f636f067f89cc14862c.jpg",
    },
    {
      id: 3,
      descricao: "Ancestral Recall",
      preco: "R$75.000,00",
      imagem: "https://www.lmcorp.com.br/arquivos/in/magic/358/5f4243dd03799-qaisok-y26ou1-c4ca4238a0b923820dcc509a6f75849b.jpg",
    },
  ],
};

export default function cartas(state = ESTADO_INICIAL, action) {
  if (action.type === "ADICIONAR_CARRINHO") {
    return {
      ...state,
      carta: action.cartas,
    };
  }
  return state;
}
