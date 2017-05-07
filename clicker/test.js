
else {
    vie = hp * lvl * 20;
    var compteur = 30;
    var clock = null;

   function count(){
     $("#timeToKill").css("display", "block").html(compteur + " s");
     compteur = compteur - 1;
   }

   clock = setInterval(function(){
     count()
   }, 1000);

   setTimeout(function(){



      clearInterval(clock);
   }, compteur * 1000);

}

afficheHero();
afficheDamage();
});
function afficheDamage(){
  $("#damage-click").html("Dommages par click : " + click);
  $("#dps").html("DPS : " + dps);
}

function affiche(){
    $(".or").html("Nb pièces d'or : " + score);
    $(".affichage").html("HP : " + vie);
    $("#mobkill").html("Monstres tués : " + nbmob + "/10");
    $("#niveau").html("niveau " + lvl);
}

var iH;
function afficheInfoHero(iH){

    if(iH == "1"){
      $("#lvl-hero1").html("Niveau : " + lvlhero1);
      $("#prix-hero1").html("prix-hero1 : " + costh1);
    }
    else if(iH == "2"){
      $("#lvl-hero2").html("Niveau : " + lvlhero2);
      $("#prix-hero2").html("prix-hero2 : " + costh2);
    }
    else if(iH == "3"){
      $("#lvl-hero3").html("Niveau : " + lvlhero3);
      $("#prix-hero3").html("prix-hero3 : " + costh3);
    }
    else if(iH == "4"){
      $("#lvl-hero4").html("Niveau : " + lvlhero4);
      $("#prix-hero4").html("prix-hero4 : " + costh4);
    }
    else if(iH == "5"){
      $("#lvl-hero5").html("Niveau : " + lvlhero5);
      $("#prix-hero5").html("prix-hero5 : " + costh5);
    }
    else{
      console.log("Error : afficheInfoHero");
    }

}
