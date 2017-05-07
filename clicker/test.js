
// VERSION 2

function monster(){
    vie = hp * lvl;

    setInterval(function(){
      vie = vie - dps;
      console.log(vie);

      $(".affichage").html("HP : " + vie);

      if(vie <= 0 && nbmob < 10){
        score = score + or * lvl;
        nbmob = nbmob + 1;
        vie = hp * lvl;

        $(".or").html("Nb pièces d'or : " + score);
        $("#mobkill").html("Monstres tués : " + nbmob + "/10");
      }
      else if(vie <= 0 && nbmob > 9){
          score = score + or * lvl + 10;
          nbmob = 0;
          lvl = lvl + 1;
          vie = hp * lvl;

          affiche();
      }
      else{
          affiche();
      }
      afficheHero();
      afficheDamage();

    }, 1000);

    if(lvl % 5 != 0){
      $("#monster").click(function(){

        vie = vie - click;
          if(vie <= 0 && nbmob < 10){
            score = score + or * lvl;
            nbmob = nbmob + 1;
            vie = hp * lvl;
            $(".or").html("Nb pièces d'or : " + score);
            $("#mobkill").html("Monstres tués : " + nbmob + "/10");

          } else if(vie <= 0 && nbmob > 9){
              score = score + or * lvl * 10;
              nbmob = 0;
              lvl = lvl + 1;
              vie = hp * lvl;

              affiche();

          } else{
              affiche();
          }


        });
      }
      else {
        $("#monster").click(function(){
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
}

/////// VERSION 1

function monster(){
    vie = hp * lvl;

    setInterval(function(){
      vie = vie - dps;
      console.log(vie);

      $(".affichage").html("HP : " + vie);

      if(vie <= 0 && nbmob < 10){
        score = score + or * lvl;
        nbmob = nbmob + 1;
        vie = hp * lvl;

        $(".or").html("Nb pièces d'or : " + score);
        $("#mobkill").html("Monstres tués : " + nbmob + "/10");
      }
      else if(vie <= 0 && nbmob > 9){
          score = score + or * lvl + 10;
          nbmob = 0;
          lvl = lvl + 1;
          vie = hp * lvl;

          affiche();
      }
      else{
          affiche();
      }
      afficheHero();
      afficheDamage();

    }, 1000);

    $("#monster").click(function(){

        vie = vie - click;
        if(lvl % 5 != 0){
          if(vie <= 0 && nbmob < 10){
            score = score + or * lvl;
            nbmob = nbmob + 1;
            vie = hp * lvl;
            $(".or").html("Nb pièces d'or : " + score);
            $("#mobkill").html("Monstres tués : " + nbmob + "/10");

          } else if(vie <= 0 && nbmob > 9){
              score = score + or * lvl * 10;
              nbmob = 0;
              lvl = lvl + 1;
              vie = hp * lvl;

              affiche();

          } else{
              affiche();
          }


        } else {
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
}
