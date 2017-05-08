function modulo(){

}


if(lvl % 5 == 0){
  console.log("niveau5");
    vie = hp * lvl * 20;
    var compteur = 0;

    var stI = setInterval(function(){}, 1000);
        console.log("interval");
          $("#monster").click(function(){
              vie = vie - click;
          });
          if(vie <= 0){
            clearInterval(stI);
          } else if(compteur == 30){
            clearInterval(stI);
          }
          else {}
          compteur++;
          console.log(compteur);
          $("#timeToKill").html(compteur + " s");

    }, 1000);

    /*if(compteur => 30 && vie > 0){
        lvl = lvl - 1;
        nbmob = 0;
    } else */if(vie <= 0){
        lvl = lvl + 1;
        score = score + or * lvl * 100;
        nbmob = 0;
    } else{}

    console.log("time-out");
}

// ---------------------------------------------------------------------//
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
// ---------------------------------------------------------------------//
// ---------------------------------------------------------------------//

function monster(){

    if(lvl % 5 == 0){
      vie = hp * lvl * 20;
      var compteur = 0;

      var stI = setInterval(function(){

        setInterval(function(){
          vie = vie - dps;
        }, 1000);

        $("#monster").click(function(){
              vie = vie - click;
        });

        if(vie <= 0){
          score = score + or * lvl * 10;
          nbmob = 0;
          lvl = lvl + 1;
          clearInterval(stI);

        } else if(compteur >= 30){
          lvl = lvl - 1;
          clearInterval(stI);
        }
        else {
          console.log("Error : Niveau 5");
        }

        compteur++;
        console.log(compteur);
        $("timeToKill").css("display", "block");
      }, 1000);
// ---------------------------------------------------------------------//
    }else {
      vie = hp * lvl;
      setInterval(function(){
        vie = vie - dps;

        $(".affichage").html("HP : " + vie);

        if(vie <= 0 && nbmob < 10){
          score = score + or * lvl;
          nbmob = nbmob + 1;
          vie = hp * lvl;

        }
        else if(vie <= 0 && nbmob > 9){
            score = score + or * lvl + 10;
            nbmob = 0;
            lvl = lvl + 1;
            vie = hp * lvl;

        }
        else{

        }

      }, 1000);

      $("#monster").click(function(){

            vie = vie - click;

            if(vie <= 0 && nbmob < 10){
              score = score + or * lvl;
              nbmob = nbmob + 1;
              vie = hp * lvl;

            } else if(vie <= 0 && nbmob > 9){
                score = score + or * lvl + 10;
                nbmob = 0;
                lvl = lvl + 1;
                vie = hp * lvl;

            } else{

            }
      });
    }
}




function monster(){

    vie = hp * lvl;
    setInterval(function(){
      vie = vie - dps;

      $(".affichage").html("HP : " + vie);

      if(vie <= 0 && nbmob < 10){
        score = score + or * lvl;
        nbmob = nbmob + 1;
        vie = hp * lvl;

      }
      else if(vie <= 0 && nbmob > 9){
          score = score + or * lvl + 10;
          nbmob = 0;
          lvl = lvl + 1;
          vie = hp * lvl;

      }
      else{

      }

    }, 1000);

    $("#monster").click(function(){

          vie = vie - click;

          if(vie <= 0 && nbmob < 10){
            score = score + or * lvl;
            nbmob = nbmob + 1;
            vie = hp * lvl;

          } else if(vie <= 0 && nbmob > 9){
              score = score + or * lvl + 10;
              nbmob = 0;
              lvl = lvl + 1;
              vie = hp * lvl;

          } else{

          }
    });

}
