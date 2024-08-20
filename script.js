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
        enunciado: "a falta e verba governamental influencia na violência obstétrica?",
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
        enunciado: "Qual é a sua postura em relação ao aprendizado de novas tecnologias?",
        alternativas: [
            {
                texto: "Prefiro me aprofundar nas tecnologias que já conheço bem antes de explorar novas.",
                afirmacao: "<b>Foco</b> é seu ponto forte, preferindo dominar suas ferramentas atuais."
            },
            {
                texto: "Gosto de experimentar e aprender novas tecnologias constantemente.",
                afirmacao: "<b>Curiosidade</b> é uma marca sua, sempre em busca de novas ferramentas e técnicas."
            }
        ]
    },
    {
        enunciado: "Como você prefere trabalhar em um projeto?",
        alternativas: [
            {
                texto: "Prefiro trabalhar sozinho, tendo total controle sobre o projeto.",
                afirmacao: "<b>Independência</b> é uma preferência sua, gostando de ter controle total sobre seus projetos."
            },
            {
                texto: "Gosto de trabalhar em equipe, colaborando e compartilhando responsabilidades.",
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
