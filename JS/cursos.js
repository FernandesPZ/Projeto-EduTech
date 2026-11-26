/* ========================
1) PEGAR OS ELEMENTOS NO HTML
=========================== */

// Onde os card vão aparecer
const listaCursos = document.querySelector("#listasCursos");

// Campo de busca
const buscaCursos = document.querySelector("#buscaCursos");

/* ============================ 
2) CRIAR UMA VARIÁVEL PARA GUARDAR OS CURSOS
=============================== */
let cursos = []; // aqui vais ficar a lista carregada do JSON

/* =======================
3) FUNÇÃO PARA CARREGAR O JSON
========================= */
function carregarCursos(){
    //busca o aquivo cursos.json (como se fosse uma mini API)

    const resposta = fech("../DATA/cursos.json");

    // transforma o JSON em dados que o JS entende
    cursos = resposta.json();

    // depois de carregar, já renderiza na tela
    renderizarCursos(cursos);
}

/* ============================
4) FUNÇÃO PARA CRIAR OS CARDS NA TELA (DOM)
=============================== */
function renderizarCursos(lista) {
    // Limpa o conteudo antes de desenhar de novo
    listaCursos.innerHTML = ""

    // Para cada curso da lista, cria um cad
    lista.forEach((curso)=> {
     //Cria um elemento HTML <div>
     const card= document.createElement("div");

     //Coloca uma classe (Para o CSS estilizar)
     card.classList.add("card-curso");

     //Coloca o conteudo dentro do CARD de Curso
     card.innerHTML = `
      <h3>${curso.titulo}</h3>
      <p>${curso.descricao}</p>
      <p><strong>CH:${curso.cargaHoraria}h</p>
     `
     // coloca o card dentro da lista de cursos[]
     listaCursos.appendChild(card);

     // evento do botão "Ver detalhes"
     const btn = card.querySelector("#btn-detalhes");
     btn.addEventListener("click", function(){
        alert("Você escolheu: "+curso.titulo)
     })
    })
}

/* ============================
5) BUSCAR: FILTRAR A LISTA QUANDO DIGITAR 
=============================== */
buscaCursos.addEventListener("input", function(){
    // pega o que a pessoa no campo de busca e guarda dentro da variavel
    const texto = buscaCursos.value.toLoWerCase();

    const filtrados = cursos.filter((curso)=>
    curso.titulo.toLoWerCase().includes(texto)
    );

    renderizarCursos(filtrados);
})

/* ============================
6) CHAMA A FUNÇÃO PARA INICIAR TUDO
=============================== */
carregarCursos();
