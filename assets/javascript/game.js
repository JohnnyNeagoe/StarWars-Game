//Choose Your Fighter

var totalHealth = 10000;
var totalHealth2 = 10000;

var attackOptions = [1000, 1500, 2000, 500, 600, 750, 1200]


document.onload = setTimeout(function () { alert("Rules: Choose your fighter by clicking on one of the characters on this page. Once your fighter is chosen, you will decide who they will go up against by clicking on another character. Once an Opponent is chosen, click the attack button to do damage to their health! Be careful though, as each time you attack, your opoonent strikes you too! Do you have what it takes to make it past all of your opponents? Will you let the darkside consume you? GOOD LUCK"); }, 500);
playGame();


function playGame(){

    choose();

    function choose(){
        $("#characterWrapper").on("click",".chosen", function(){
        $(this).appendTo(".yourFighter");
        $(this).attr("class", "col-lg-12 player")

            if ($(this).appendTo(".yourFighter")); {
            $("#characterWrapper").appendTo(".eta");
            $(".chosen").attr("class", "col-lg-4 oppo")
            $("#peace").hide();
            
            chooseOppo();
            }
        });
    };
    
    function chooseOppo(){
        $("#characterWrapper").on("click",".oppo", function(){
        $(this).appendTo(".opponent");
        $(this).attr("class", "col-lg-6 oppoOne")

            if ($(this).appendTo(".opponent")); {
            $(".oppo").attr("class", "col-lg-6 nextOppo")
            play();
            }
        });
    };

    function play(){
        $("#health").text("Health: " + totalHealth);
        $("#health2").text("Health: " + totalHealth2);
        if ((totalHealth === 10000)){
            attackPlayer();
            }
        else if ((totalHealth <= 0)){
            gameOver();

            }
    };
       
    
        function attackPlayer(){
            $("#buttonOne").on("click", "#zaza", function(){

                if ($(""))

                var attackOptions = [1000, 1500, 2000, 500, 600, 750, 1200];
                var oppoAttack = [500, 600, 700, 800, 900, 1000, 1200]
                var strike = [attackOptions[Math.round(Math.random())]];
                var strike2 = [oppoAttack[Math.round(Math.random())]];

                for (var i=0; i < strike.length; i++){

                    totalHealth = (totalHealth - strike2);
                    $("#health").text("Health: " + totalHealth);
                    console.log(totalHealth);
                    console.log(strike);

                    for (var i=0; i < strike2.length; i++){
                        
                        totalHealth2 = (totalHealth2 - strike);
                        $("#health2").text("Health: " + totalHealth2);
                        console.log(totalHealth2);
                        console.log(strike2);
                    }
                    if ((totalHealth <= 0)){
                    alert("You LOSE! The Darkside has conqured your soul");

                    gameOver();
                    }
                    
                    else if ((totalHealth2 <=0)){
                        alert("First Opponent Down! Choose who you want to fight next!")

                        nextFight();
                    }
                };
            });  
        };

        function nextFight(){
            totalHealth2 = 10000;
            $("#health2").text("Health: " + totalHealth2);
            $(".oppoOne").remove(".oppoOne");

            chooseOppo2();


        }

        function chooseOppo2(){
                alert("Choose Your Next Victim!");
                $("#characterWrapper").on("click",".nextOppo", function(){
                $(this).appendTo(".opponent");
                $(this).attr("class", "col-lg-6 oppoTwo")
            
                if ($(this).appendTo(".opponent")); {
                $(".nextOppo").attr("class", "col-lg-6 lastOppo")
                play();
                }
            });
        };








};