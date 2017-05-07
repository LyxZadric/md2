
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
