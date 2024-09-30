var r1 = document.getElementById("r1")
var r2 = document.getElementById("r2")
var r3 = document.getElementById("r3")
var r4 = document.getElementById("r4")
var pergunta = document.getElementById("pergunta")
var proximo = document.getElementById("proximo")
var npergunta = 0
var certo = 0
var respondido = 0
var nacerto = document.getElementById("nacerto")
var reset = 0

const questoes = [
    {
      pergunta: "1. Qual é a principal função do HTML em um site?",
      resposta: "Estruturar o conteúdo da página",
      opcoes: ["Estilizar o conteúdo da página.", "Adicionar interatividade ao site.", "Gerenciar o banco de dados do site."]
    },
    {
      pergunta: "2. Qual atributo é utilizado para definir um link para outra página em um elemento <a>?",
      resposta: "href",
      opcoes: ["link", "target", "url"]
    },
    {
        pergunta: "3. Qual propriedade CSS é usada para definir a cor de fundo de um elemento?",
        resposta: "background-color",
        opcoes: ["color", "fill", "paint"]
    },
    {
        pergunta: "4. Qual é a diferença entre um elemento de bloco e um elemento inline?",
        resposta: "Elementos de bloco ocupam toda a largura disponível, enquanto elementos inline ocupam apenas o espaço necessário.",
        opcoes: ["Elementos inline ocupam toda a largura disponível, enquanto elementos de bloco ocupam apenas o espaço necessário.", "Não há diferença entre os dois.", "Elementos de bloco são usados para criar listas, enquanto elementos inline são usados para criar parágrafos."]
    },
    {
        pergunta: "5. Qual seletor CSS é usado para selecionar todos os elementos de um determinado tipo?",
        resposta: "tag",
        opcoes: ["*", "#id", ".class"]
    },
    {
          pergunta: "6. Qual propriedade CSS é usada para controlar o espaçamento entre elementos?",
          resposta: "margin",
          opcoes: ["padding", "border", "spacing"]
    },
    {
        pergunta: "7. O que são media queries em CSS?",
        resposta: "Uma maneira de aplicar estilos diferentes dependendo do dispositivo (celular, tablet, desktop).",
        opcoes: ["Uma forma de adicionar comentários ao código CSS.", "Um tipo de função matemática usada para calcular valores.", "Uma ferramenta para depurar código CSS."]
    },
    {
          pergunta: "8. Qual é a função da tag div em HTML?",
          resposta: "Agrupar outros elementos.",
          opcoes: ["Definir um título para a página.", "Criar uma tabela.", "Inserir uma imagem."]
    },
    {
          pergunta: "9. Qual propriedade CSS é usada para centralizar um elemento horizontalmente?",
          resposta: "margin: auto;",
          opcoes: ["text-align: center;", "position: absolute;", "display: flex;"]
    },
    {
          pergunta: "10. O que é o modelo de caixa (box model) em CSS?",
          resposta: "Um modelo de como os navegadores interpretam os elementos HTML.",
          opcoes: ["Uma forma de organizar os elementos em uma página da web.", "Um conjunto de regras para criar animações CSS.", "Um tipo de layout responsivo."]
    },
  ];

function resposta1(){
    if (respondido == 0){

        if (reset == 0){
            reset++
            certo = 0
        }
    respondido = 1
    
    proximo.style.display = "flex"
if (r1.classList.contains("certo")) {
    r1.style.background = "green"
    certo++
}
else{
    r1.style.background = "red" 
    if (r2.classList.contains("certo")){
        r2.style.background = "green" 
    }
    if (r3.classList.contains("certo")) {
        r3.style.background = "green"
    }
    if (r4.classList.contains("certo")) {
        r4.style.background = "green"
    }
}
}
}
function resposta2(){
    
    if (respondido == 0){
    respondido = 1

    if (reset == 0){
        reset++
        certo = 0
    }
    
        proximo.style.display = "flex"
    if (r2.classList.contains("certo")) {
        r2.style.background = "green"
        certo++
    }
    else{
        r2.style.background = "red" 
        if (r1.classList.contains("certo")){
            r2.style.background = "green" 
        }
        if (r3.classList.contains("certo")) {
            r3.style.background = "green"
        }
        if (r4.classList.contains("certo")) {
            r4.style.background = "green"
        }
    }
}
}
function resposta3(){
    if (respondido == 0){
    respondido = 1

    if (reset == 0){
        reset++
        certo = 0
    }
    
        proximo.style.display = "flex"
    if (r3.classList.contains("certo")) {
        r3.style.background = "green"
        certo++
    }
    else{
        r3.style.background = "red" 
        if (r2.classList.contains("certo")){
            r2.style.background = "green" 
        }
        if (r1.classList.contains("certo")) {
            r3.style.background = "green"
        }
        if (r4.classList.contains("certo")) {
            r4.style.background = "green"
        }
    }
}
}
function resposta4(){
    if (respondido == 0){
    respondido = 1

    if (reset == 0){
        reset++
        certo = 0
    }
    
        proximo.style.display = "flex"
    if (r4.classList.contains("certo")) {
        r4.style.background = "green"
        certo++
    }
    else{
        r4.style.background = "red" 
        if (r2.classList.contains("certo")){
            r2.style.background = "green" 
        }
        if (r3.classList.contains("certo")) {
            r3.style.background = "green"
        }
        if (r1.classList.contains("certo")) {
            r4.style.background = "green"
        }
    }
}
}
function proxima(){
    respondido = 0
    if (npergunta == 9)
    {
        localStorage.setItem("number", certo)
        window.location.href = "resultado.html"
    }

    npergunta += 1
    pergunta.innerHTML = questoes[npergunta].pergunta

    var opcoesFalsas = [
        questoes[npergunta].opcoes[0],
        questoes[npergunta].opcoes[1],
        questoes[npergunta].opcoes[2],
        questoes[npergunta].resposta // Adicionando a resposta correta em uma posição aleatória
      ].sort(() => Math.random() - 0.5); // Embaralha as opções

    r1.innerHTML = opcoesFalsas[0]
    r2.innerHTML = opcoesFalsas[1]
    r3.innerHTML = opcoesFalsas[2]
    r4.innerHTML = opcoesFalsas[3]

    
    if (r1.innerHTML == questoes[npergunta].resposta ){
        r1.classList.replace("errado", "certo")
    }
    else
    r1.classList.replace("certo", "errado")
    if (r2.innerHTML == questoes[npergunta].resposta){
        r2.classList.replace("errado", "certo")
    }
    else
    r2.classList.replace("certo", "errado")
    if (r3.innerHTML == questoes[npergunta].resposta){
        r3.classList.replace("errado", "certo")
    }
    else
    r3.classList.replace("certo", "errado")

    if (r4.innerHTML == questoes[npergunta].resposta){
        r4.classList.replace("errado", "certo")
    }
    else
    r4.classList.replace("certo", "errado")

    r1.style.background = "white"
    r2.style.background = "white"
    r3.style.background = "white"
    r4.style.background = "white"
    proximo.style.display = "none"
    }
    certo = localStorage.getItem("number")
    nacerto.innerHTML = "você acertou " + certo + "/10"