function loadRecord() {
  let campoRecord = document.getElementById("record")
  campoRecord.innerHTML = ''
  if (localStorage.getItem("record") != null &&
  localStorage.getItem("record") != undefined) {
      campoRecord.innerHTML = `${localStorage.getItem("record")}`
  }
}

function saveRecord() {
  localStorage.setItem("record", pontuacaoAtual)
  loadRecord()
}

loadRecord()