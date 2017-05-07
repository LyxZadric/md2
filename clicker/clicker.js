    var lvl = 1;
    var nbmob = 0;
    var hp = 10;
    var prix = 0;
    var or = 1;
    var score = 0;
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

        function afficheHero(){

                if(score == 5){
                    $("#hero1").css("display", "block");
                    afficheInfoHero("1");
                } else if(score == 30){
                    $("#hero2").css("display", "block");
                    afficheInfoHero("2");
                } else if(score == 100){
                    $("#hero3").css("display", "block");
                      afficheInfoHero("3");
                } else if(score == 250){
                    $("#hero4").css("display", "block");
                    afficheInfoHero("4");
                } else if(score == 1000){
                    $("#hero5").css("display", "block");
                    afficheInfoHero("5");
                } else {
                    console.log("Error : AfficheHero");
                }
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

        var h;
        function hero(h){
            console.log("function hero");
            if(h == "1" && score >= costh1){
                lvlhero1 = lvlhero1 + 1;
                click = click + 1;
                score = score - costh1;
                costh1 = costh1 +2;
                afficheInfoHero("1");
                affiche();
            } else if(h == "2" && score >= costh2){
                console.log("else if function hero");
                lvlhero2 = lvlhero2 + 1;
                dps = dps + 1;
                score = score - costh2;
                costh2 = costh2 + 20;
                afficheInfoHero("2");
                affiche();
            } else if(h == "3" && score >= costh3){
                console.log("else if function hero");
                lvlhero3 = lvlhero3 + 1;
                dps = dps + 5;
                score = score - costh3;
                costh3 = costh3 + 80;
                afficheInfoHero("3");
                affiche();
            } else if(h == "4" && score >= costh4){
                console.log("else if function hero");
                lvlhero4 = lvlhero4 + 1;
                dps = dps + 10;
                score = score - costh4;
                costh4 = costh4 + 330;
                afficheInfoHero("4");
                affiche();
            } else if(h == "5" && score >= costh5){
                console.log("else if function hero");
                lvlhero5 = lvlhero5 + 1;
                dps = dps + 1;
                score = score - costh5;
                costh5 = costh5 + 1300;
                afficheInfoHero("5");
                affiche();
            } else {
              console.log("Error : hero()");
            }



        }

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

            if(vie <= 0 && nbmob < 10){
              score = score + or * lvl;
              nbmob = nbmob + 1;
              vie = hp * lvl;

              $(".or").html("Nb pièces d'or : " + score);
              $("#mobkill").html("Monstres tués : " + nbmob + "/10");
            }
            else if(vie <= 0 && nbmob > 9){
                score = score + or * lvl * 10;
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
        });
    }



    $("#monster").click(monster());
    $("#lvluphero1").click(function(){
        hero("1");
        afficheDamage();
    });
    $("#lvluphero2").click(function(){
        hero("2");
        afficheDamage();
    });
    $("#lvluphero3").click(function(){
        hero("3");
        afficheDamage();
    });
    $("#lvluphero4").click(function(){
        hero("4");
        afficheDamage();
    });
    $("#lvluphero5").click(function(){
        hero("5");
        afficheDamage();
    });
    affiche();

  
