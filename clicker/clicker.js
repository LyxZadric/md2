    var lvl = 1;
    var nbmob = 0;
    var hp = 10;
    var prix = 0;
    var or = 1;
    var score = 100;
    var dps = 0;
    var click = 1;
    var vie = 0;
//VARIABLES HERO 1 - Tableau à utiliser pour l'amélioration du code
    var lvlhero1 = 0;
    var costh1 = 5;
// VARIABLES HERO 2
    var lvlhero2 = 0;
    var costh2 = 50;
// VARIABLES HERO 3
    var lvlhero3 = 0;
    var costh3 = 250;
// VARIABLES HERO 4
    var lvlhero4 = 0;
    var costh4 = 1000;
// VARIABLES HERO 5
    var lvlhero5 = 0;
    var costh5 = 4000;


    hp = hp * lvl;

        function affichageGeneral(){

              $(".or").html("Nb pièces d'or : " + score);
              $(".affichage").html("HP : " + vie);
              $("#mobkill").html("Monstres tués : " + nbmob + "/10");
              $("#niveau").html("niveau " + lvl);

              $("#damage-click").html("Dommages par click : " + click);
              $("#dps").html("DPS : " + dps);

              $("#lvl-hero1").html("Niveau : " + lvlhero1);
              $("#prix-hero1").html("prix-hero1 : " + costh1);

              $("#lvl-hero2").html("Niveau : " + lvlhero2);
              $("#prix-hero2").html("prix-hero2 : " + costh2);

              $("#lvl-hero3").html("Niveau : " + lvlhero3);
              $("#prix-hero3").html("prix-hero3 : " + costh3);

              $("#lvl-hero4").html("Niveau : " + lvlhero4);
              $("#prix-hero4").html("prix-hero4 : " + costh4);

              $("#lvl-hero5").html("Niveau : " + lvlhero5);
              $("#prix-hero5").html("prix-hero5 : " + costh5);

              afficheHero();
        }

        function afficheHero(){

                if(score >= 5){
                    $("#hero1").css("display", "block");
                }
                if(score >= 30){
                    $("#hero2").css("display", "block");
                }
                if(score >= 100){
                    $("#hero3").css("display", "block");
                }
                if(score >= 250){
                    $("#hero4").css("display", "block");
                }
                if(score >= 1000){
                    $("#hero5").css("display", "block");
                }
        }

        var h;
        function hero(h){

            if(h == "1" && score >= costh1){

                lvlhero1 = lvlhero1 + 1;
                click = click + 1;
                score = score - costh1;
                costh1 = costh1 +2;

            } else if(h == "2" && score >= costh2){

                lvlhero2 = lvlhero2 + 1;
                dps = dps + 1;
                score = score - costh2;
                costh2 = costh2 + 20;
                afficheHero("2");

            } else if(h == "3" && score >= costh3){

                lvlhero3 = lvlhero3 + 1;
                dps = dps + 5;
                score = score - costh3;
                costh3 = costh3 + 80;
                afficheHero("3");

            } else if(h == "4" && score >= costh4){

                lvlhero4 = lvlhero4 + 1;
                dps = dps + 10;
                score = score - costh4;
                costh4 = costh4 + 330;
                afficheHero("4");

            } else if(h == "5" && score >= costh5){

                lvlhero5 = lvlhero5 + 1;
                dps = dps + 1;
                score = score - costh5;
                costh5 = costh5 + 1300;
                afficheHero("5");

            } else {
              console.log("Error : hero()");
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




    $("#monster").click(monster());
    $("#lvluphero1").click(function(){
        hero("1");
    });
    $("#lvluphero2").click(function(){
        hero("2");
    });
    $("#lvluphero3").click(function(){
        hero("3");
    });
    $("#lvluphero4").click(function(){
        hero("4");
    });
    $("#lvluphero5").click(function(){
        hero("5");
    });

    setInterval(function(){
      affichageGeneral();
    }, 1000);
