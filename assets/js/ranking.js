function loadRecord() {
  let campoRecord = document.getElementById("record")
  campoRecord.innerHTML = ''
  if (localStorage.getItem("record") != null &&
  localStorage.getItem("record") != undefined) {
      campoRecord.innerHTML = `${localStorage.getItem("record")}`
  }
}

function saveRecord() {
  let nome = prompt("Digite seu Nome:");
  console.log(nome);
  localStorage.setItem("record", pontuacaoAtual)
  loadRecord()
}

loadRecord()
