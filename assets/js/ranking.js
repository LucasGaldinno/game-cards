function loadRecord() {
  let campoRecord = document.getElementById("record")
  campoRecord.innerHTML = ''
  if (localStorage.getItem("record") != null &&
  localStorage.getItem("record") != undefined) {
      campoRecord.innerHTML = `${localStorage.getItem("record")}`
  }
}

function saveRecord() {
  let nome = prompt("Qual o Seu Nome?");
  console.log(nome);
  localStorage.setItem("record", pontuacaoAtual)
  loadRecord()
}

loadRecord()
