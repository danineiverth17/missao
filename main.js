const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
enunciado: "Assim que saiu da escola você se depara com vários desafios, um dos principais é lidar com suas emoções e sentimentos. Qual o primeiro pensamento?",
alternativas: [
{
texto: "Isso é assustador!",
afirmacao: "afirmação"
},
{
texto: "Isso é tranquilo!",
afirmacao: "afirmação"
}
]
},
{
enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
alternativas: [
{
texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
afirmacao: "afirmação"
},
{
texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
afirmacao: "afirmação"
}
]
},
{
enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
alternativas: [
{
texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
afirmacao: "afirmação"
},
{
texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
afirmacao: "afirmação"
}
]
},
{
enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
alternativas: [
{
texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
afirmacao: "afirmação"
Style:

:root{
    --cor-fundo: #01080E;
    --cor-principal: #0B0D20 ;
    --cor-secundaria: #212333;
    --cor-destaque: #2BDEFD;
    --cor-texto: #D7F9FF;
}

body{
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.caixa-principal{
    background-color: var(--cor-principal);
    width: 90%;
    max-width: 600px;
    text-align: center;
    padding: 20px;
}

h1{
    color: var(--cor-destaque);
}

.caixa-perguntas{
    padding-bottom: 10px;
}
:root{
    --cor-fundo: #01080E;
    --cor-principal: #0B0D20 ;
    --cor-secundaria: #212333;
    --cor-destaque: #2BDEFD;
    --cor-texto: #D7F9FF;
}

button{
    background-color: var(--cor-secundaria);
    color: var(--cor-texto);
    border: none;
    border-radius: 15px;
    padding: 15px;
    transition: background-color 0.3s;
}

button:hover{
    background-color: var(--cor-destaque);
    color: var(--cor-principal);
}


