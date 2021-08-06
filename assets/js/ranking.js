function saveRecord(){
  var nick = prompt("Digite seu Nome: ");

  let obj = { name: nick, points: record };
  ranking.unshift(obj)

  exibirRanking();

  salvarRanking();
}

function salvarRanking(){
  localStorage.setItem("ranking", JSON.stringify(ranking))
}

function exibirRanking(){   
  function compare( a, b ) {
      if ( a.points < b.points ){
        return -10;
      }
      if ( a.points > b.points ){
        return 20;
      }
      return 0;
  }
  ranking.sort(compare);
  ranking.reverse();

  
  position = 1;
  for(obj in ranking) {
      obj = ranking[obj];
      document.getElementById("nick_" + position).innerHTML = obj.name;
      document.getElementById("points_" + position).innerHTML = obj.points;
  }
}

function recuperarRanking(){
  if(localStorage.getItem("ranking") == null){
      return [];
  }else{
      let ranking = JSON.parse(localStorage.getItem("ranking"))
      return ranking;
  }
}

var pontuacaoAtual = 0
var ranking = recuperarRanking();

exibirRanking()
