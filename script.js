const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "Durante uma feira cultural na escola, sua equipe decide apresentar a relação entre os santos católicos e os orixás, destacando a fé de pessoas que associam a promessa feita a um orixá à figura de um santo. Um colega de classe se recusa a participar e exige que o trabalho seja cancelado, alegando que isso \"confunde as religiões\" e desrespeita a fé dele.",
    alternativas: [
      {
        texto: "Não saberia lidar",
        afirmacao: [
          "Fico irritado com a atitude do colega, discuto afirmando que ele é preconceituoso e me recuso a conversar com ele até que a direção do colégio o obrigue a fazer o trabalho. ",
          "Você se sente frustrado e impotente porque a rejeição imediata do colega gera um sentimento de injustiça, fazendo com que o conflito se sobrensaia em vez da busca pelo entendimento. ."
        ]
      },
      {
        texto: "Saberia lidar",
        afirmacao: [
          "Explico que o trabalho não obriga ninguém a mudar de religião, mas busca entender como a cultura e a fé se misturaram na história do país, propondo que ele apresente a visão da religião dele enquanto o grupo respeita o espaço de todos.",
          "Você se sente seguro porque entende que o diálogo e a convivência entre crenças diferentes enriquem o ambiente sem anular a identidade de ninguém. "
        ]
      }
    ]
  },
  {
    enunciado:
      "Um morador do seu bairro decide realizar um ritual religioso tradicional de matriz africana no espaço comunitário do condomínio/bairro para pagar uma promessa de cura. A liderança comunitária proíbe o evento de última hora, alegando que a prática \"fere os costumes\" do local, embora eventos de outras religiões sejam permitidos no mesmo espaço. ",
    alternativas: [
      {
        texto: "Não saberia lidar",
        afirmacao: [
          "Reúno a comunidade para dialogar com a liderança, mostrando que o espaço público pertence a todos e que a liberdade de culto é um direito protegido que deve garantir o mesmo acesso a qualquer manifestação de fé. ",
          "Você se sente motivado a agir com justiça porque reconhece que a igualdade de direitos é a única forma de evitar que dogmas institucionais excluam pessoas simples e suas devoções."
        ]
      },
      {
        texto: "Saberia lidar",
        afirmacao: [
          "Aceito a decisão para evitar brigas no bairro, mesmo achando injusto, e aconselho a pessoa a fazer o ritual bem longe dali para não causar mais problemas.",
          "Você se sente desconfortável e culpado por se omitir, pois percebe a discriminação, mas o medo do confronto o faz aceitar a exclusão do outro."
        ]
      }
    ]
  },
  {
    enunciado:
      "Um vizinho humilde faz uma caminhada levando um símbolo de sua fé para cumprir um voto pessoal. Pessoas na rua começam a filmá-lo sem autorização, fazendo piadas nas redes sociais e distorcendo a motivação dele para ganhar seguidores e gerar polêmica.",
    alternativas: [
      {
        texto: "Não saberia lidar",
        afirmacao: [
          "Fico com vergonha da situação e me afasto para não me envolver, achando que a culpa é do próprio morador por expor sua fé em público. ",
          "Você se sente constrangido e distante porque a pressão do julgamento social o leva a culpabilizar a vítima em vez de questionar a intolerância ao seu redor. "
        ]
      },
      {
        texto: "Saberia lidar",
        afirmacao: [
          "Bato um papo com quem está filmando para pedir respeito à privacidade do morador e ajudo a proteger o trajeto dele, lembrando que a devoção pessoal de alguém não deve virar espetáculo ou piada. ",
          "Você se sente empático porque enxerga a dignidade na promessa do indivíduo e entende que a fé sincera deve ser protegida da exposição maldosa. "
        ]
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

function aleatorio(lista) {
  const posicao = Math.floor(Math.random() * lista.length);
  return lista[posicao];
}

mostraPergunta();