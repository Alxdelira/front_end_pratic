const formulario = document.querySelector("#formulario");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const curso = document.querySelector("#curso");
const atendimento = document.querySelector("#atendimento");
const termos = document.querySelector("#termos")

formulario.addEventListener("submit", e => {
    e.preventDefault();
    // console.log(nome.value);
    // console.log(email.value);

    const inscricao = {
        nome: nome.value,
        email: email.value,
        curso: curso.value,
        atendimento: atendimento.value,
        termos: termos.checked
    }

    console.table(inscricao);
    nome.value = "";
    email.value = "";
    atendimento.value = "";
    curso.selectedIndex = 0;
    termos.checked = false;
    nome.focus();
});

const mensagem = document.querySelector("#menssagem");
mensagem.addEventListener("click", e => {
    e.preventDefault();
    alert("Clicou no botão");
});

// mensagem.addEventListener("mouseover", e => {
//     e.preventDefault();
//     console.log("Passou o mouse");
// });