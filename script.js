const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Por que a violência obstétrica está cada vez mais banalizada??",
        alternativas: [
            {
                texto: "negligência médica",
                afirmacao: "<b>Organização</b> Apesar do uso de algumas técnicas serem restringidas apenas para casos específicos, ainda ão utilizadas diariamente por profissionais da saúde."
            },
            {
                texto: "desinformação da população",
                afirmacao: "Mesmo com fácil acesso a informação, o assunto é pouco comentado e dado  certa  importância."
            }
        ]
    },
    {
        enunciado: " o governo deveria invetir em palestras e campanhas.",
        alternativas: [
            {
                texto: "Sim, acho que o governo deveria invetir em palestras e campanhas.",
                afirmacao: "Não é preocupação de grande porte.</b>."
            },
            {
                texto: "Apesar do uso de algumas técnicas serem restringidas apenas para casos específicos, ainda ão utilizadas diariamente por profissionais da saúde.",
                afirmacao: "Mesmo com fácil acesso a informação, o assunto é pouco comentado e dado  certa  importância."
            }
        ]
    },
    {
        enunciado: "Por que a violência obstétrica está cada vez mais banalizada?",
        alternativas: [
            {
                texto: "falta e verba governamental influencia na violência obstétrica?",
                afirmacao: "<b>Pragmatismo</b> A falta de recursos normaliza que crimes sejam cometidos."
            },
            {
                texto: "Falta de profissionais qualificados.",
                afirmacao: "<b>Detalhista</b>, a falta de profissionalismo em hospitais, sem supervisões adequadas é um agente que influencia eses crimes."
            }
        ]
    },
    {
        enunciado: "Qual é a sua postura em relação a violencia obstétrica?",
        alternativas: [
            {
                texto: "Prefiro permanecer neutro sobre a questão",
                afirmacao: "<b>Foco</b> assunto muito forte para ser opinado"
            },
            {
                texto: "Gosto de lutar por justas causas, a fim de melhorar a sociedade",
                afirmacao: "<b>Curiosidade</b> espalhar a informação pode ajudar a previnir esses casos"
            }
        ]
    },
    {
        enunciado: "Como você prefere trabalhar para solucionar esse problema?",
        alternativas: [
            {
                texto: "Prefiro trabalhar sozinho e depois compartilhar minhas ideias.",
                afirmacao: "<b>Independência</b> colaborar em equipe para juntar ideias."
            },
            {
                texto: "Gosto de colaborar em equipe e juntar ideias.,
                afirmacao: "<b>Trabalho em equipe</b> é algo que você valoriza, apreciando a colaboração e a partilha de responsabilidades."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta();
