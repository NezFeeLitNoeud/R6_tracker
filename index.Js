
document.getElementById("envoie").addEventListener("click", function(){
// On lance la fonction FirstFetch qui callBack la fonction secondFetch
// Afin de ne pas avoir de problème de requete asynchrone et de demander un ID qui n'est pas encore recupérer.
  firstFetch(secondFetch);

 })



function firstFetch(callback){
  fetch('https://r6tab.com/api/search.php?platform='+ plat.value + '&search=' + pseudo.value)
  .then((resp) => resp.json())
  .then(data => {

    // le p_id assigner à la var ID
    id =  data.results[0].p_id;
     console.log(data)
     console.log(pseudo.value)
     callback(id);
  })
}



function secondFetch(id){
  fetch('https://r6tab.com/api/player.php?p_id=' + id)

  .then(result => result.json())
  .then(data => {
    console.log(data)
    // Vérification que l'id est bien stocker
      console.log(data.season7)
      name_player.innerHTML = data.p_name
      lvl_player.innerHTML = data.p_level

  })
}

////////////////////////////////////////////////////////////////////////
////                        PREMIERE VERSION                        ////
////////////////////////////////////////////////////////////////////////

//ID DE MON COMPTE :  "3ae0a8d8-b45b-4c56-bd3c-60cfbd3cc06a"
//Recherche via l'API par lea platefrome & le pseudo (psn, Devious_maid)
//   fetch('https://r6tab.com/api/search.php?platform='+plat+'&search='+pseudo)
//   .then((resp) => resp.json())
//   .then(function(data){
//     // resultat
//     let answer = data.results;
//     // le p_id assigner à la var ID
//      id = data.results[0].p_id;
//      console.log(answer)

//   })
//   setTimeout(()=>{fetch('https://r6tab.com/api/player.php?p_id=' + id)

//   .then(result => result.json())
//   .then(data => {
//     console.log(data)
//     // Vérification que l'id est bien stocker
//       console.log("id = " + id)
//   })},1000)