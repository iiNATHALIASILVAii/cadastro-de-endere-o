//1. ouvir o evento quando o user sair do campo cep
document.getElementById("cep").addEventListener("blur", (evento) => {
  const elemento = evento.target;
  const cepInformado = elemento.value.replace(/\D/g, "");

  //2. validar o cep

  if (!(cepInformado.length === 8)) return;

  //3. fazer busca no viacep
  fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.erro) {
        document.getElementById("logradouro").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("estado").value = data.uf;
      } else {
        alert("CEP não encontrado.");
      }
    })
    .catch((error) => console.error("Erro ao buscar o CEP: ", error));
});
