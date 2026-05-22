function login(){

const usuario =
document.getElementById("usuario").value;

const senha =
document.getElementById("senha").value;

if(usuario === "admin" && senha === "1234"){

document.getElementById("loginPage").style.display =
"none";

document.getElementById("painel").style.display =
"block";

}else{

document.getElementById("erro").innerHTML =
"Usuário ou senha inválidos";

}

}

function logout(){

location.reload();

}

function selecionarServico(servico){

document.getElementById("tipoServico").value =
servico;

}

const form =
document.getElementById("formulario");

const lista =
document.getElementById("lista");

document.addEventListener(
"DOMContentLoaded",
carregar
);

form.addEventListener("submit", function(e){

e.preventDefault();

const atendimento = {

id: Date.now(),

cliente:
document.getElementById("cliente").value,

telefone:
document.getElementById("telefone").value,

marca:
document.getElementById("marca").value,

modelo:
document.getElementById("modelo").value,

ano:
document.getElementById("ano").value,

placa:
document.getElementById("placa").value,

cor:
document.getElementById("cor").value,

km:
document.getElementById("km").value,

tipoServico:
document.getElementById("tipoServico").value,

status:
document.getElementById("status").value,

entrada:
document.getElementById("entrada").value,

saida:
document.getElementById("saida").value,

valor:
document.getElementById("valor").value,

pagamento:
document.getElementById("pagamento").value,

servico:
document.getElementById("servico").value,

pecas:
document.getElementById("pecas").value,

obs:
document.getElementById("obs").value

};

salvar(atendimento);

form.reset();

carregar();

});

function salvar(dados){

let listaAtendimentos =
JSON.parse(localStorage.getItem("lc-oficina"))
|| [];

listaAtendimentos.push(dados);

localStorage.setItem(
"lc-oficina",
JSON.stringify(listaAtendimentos)
);

}

function carregar(){

let listaAtendimentos =
JSON.parse(localStorage.getItem("lc-oficina"))
|| [];

lista.innerHTML = "";

listaAtendimentos.forEach(item => {

lista.innerHTML += `

<div class="item">

<h4>${item.cliente}</h4>

<p><strong>WhatsApp:</strong>
${item.telefone}</p>

<p><strong>Veículo:</strong>
${item.marca} ${item.modelo}</p>

<p><strong>Ano:</strong>
${item.ano}</p>

<p><strong>Cor:</strong>
${item.cor}</p>

<p><strong>Placa:</strong>
${item.placa}</p>

<p><strong>KM:</strong>
${item.km}</p>

<p><strong>Serviço:</strong>
${item.tipoServico}</p>

<p><strong>Status:</strong>
${item.status}</p>

<p><strong>Entrada:</strong>
${item.entrada}</p>

<p><strong>Previsão:</strong>
${item.saida}</p>

<p><strong>Valor:</strong>
R$ ${item.valor}</p>

<p><strong>Pagamento:</strong>
${item.pagamento}</p>

<p><strong>Descrição:</strong>
${item.servico}</p>

<p><strong>Peças:</strong>
${item.pecas}</p>

<p><strong>Observações:</strong>
${item.obs}</p>

<div class="acoes">

<a target="_blank"
href="https://wa.me/55${item.telefone.replace(/\D/g,'')}?text=
Olá%20${item.cliente}%20🚗

Seu%20veículo%20está%20em:%20${item.status}

🔧%20Serviço:%20${item.tipoServico}

📅%20Previsão:%20${item.saida}

💰%20Valor:%20R$%20${item.valor}

Obrigado%20pela%20preferência."
style="flex:1;">

<button class="whatsapp">
WhatsApp
</button>

</a>

<button class="excluir"
onclick="remover(${item.id})">

Excluir

</button>

</div>

</div>

`;

});

}

function remover(id){

if(confirm("Deseja excluir atendimento?")){

let listaAtendimentos =
JSON.parse(localStorage.getItem("lc-oficina"))
|| [];

listaAtendimentos =
listaAtendimentos.filter(item => item.id !== id);

localStorage.setItem(
"lc-oficina",
JSON.stringify(listaAtendimentos)
);

carregar();

}

}