    var lvl = 1;
    var nbmob = 0;
    var hp = 10;
    var prix = 0;
    var or = 1;
    var score = 4;
    var dps = 0;
    var click = 1;
    var vie = 0;

    hp = hp * lvl;

    function monster(){
        vie = hp * lvl;

        $("#monster").click(function(){
            vie = vie - click;
            $(".affichage").html("HP : " + vie);
            or = 1;

            if(vie == 0 && nbmob < 10){
              or = or * lvl;
              score = score + or;
              nbmob = nbmob + 1;
              vie = hp * lvl;

              $(".or").html("Nb pièces d'or : " + score);
              $("#mobkill").html("Monstres tués : " + nbmob + "/10");
            }
            else if(vie == 0 && nbmob > 9){
                or = or * lvl * lvl;
                score = score + or;
                nbmob = 0;
                lvl = lvl + 1;
                vie = hp * lvl;

                affiche();
            }
            else{
                affiche();
            }
            afficheHero();
        });
    }
    function afficheHero(){

            if(score >= 5){
                $("#hero1").css("display", "block");
            } else if(score >= 30){
                $("#hero2").css("display", "block");
            } else if(score >= 50){
                $("#hero3").css("display", "block");
            } else if(score >= 250){
                $("#hero4").css("display", "block");
            } else if(score >= 1000){
                $("#hero5").css("display", "block");
            } else {

            }
    }

    function hero($h){
        var costh1 = 5;
        var lvlhero1 = 0;

        if($h == "hero1" && or >= costh1){
            lvlhero1 =+ 1;
            click = click + 1;
            costh1 = cost +2;
        }
    }
    function prixHero(){

    }


    function affiche(){
        $(".or").html("Nb pièces d'or : " + score);
        $(".affichage").html("HP : " + vie);
        $("#mobkill").html("Monstres tués : " + nbmob + "/10");
        $("#niveau").html("niveau " + lvl);
        $("lvlhero1").html("niveau " + lvlhero1);
    }



    $("#monster").click(monster());
    $("lvluphero1").click(hero(hero1));
    affiche();
