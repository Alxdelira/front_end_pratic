const formulario = document.querySelector("#formulario");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const curso = document.querySelector("#curso");
const atendimento = document.querySelector("#atendimento");
const termos = document.querySelector("#termos");

formulario.addEventListener("submit", e => {
    e.preventDefault();

    // Adicionando objetos ao array
    adicionarObjeto(
        nome.value,
        email.value,
        curso.value,
        atendimento.value,
        termos.checked
    );


    // Imprimindo objetos no console
    imprimirObjetos();
});

let arrayDeObjetos = [];

// Função para adicionar objetos ao array
function adicionarObjeto(nome, email, curso, atendimento, termos) {
    const objeto = {
        nome: nome,
        email: email,
        curso: curso,
        atendimento: atendimento,
        termos: termos
    };
    arrayDeObjetos.push(objeto);

}

// Função para imprimir objetos no console e limpar depois de usado 
function imprimirObjetos() {
    console.table(arrayDeObjetos);

    nome.value = "";
    email.value = "";
    atendimento.value = "";
    curso.selectedIndex = 0;
    termos.checked = false;
    nome.focus();
}

