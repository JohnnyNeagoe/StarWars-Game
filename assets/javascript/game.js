var totalHealth = 0;
var totalHealth2 = 0;
var attackOptions = 0;
var oppoAttack = [];
var originalAttack = 0;

document.onload = setTimeout(function () { alert("Rules: Choose your fighter by clicking on one of the characters on this page. Once your fighter is chosen, you will decide who they will go up against by clicking on another character. Once an Opponent is chosen, click the attack button to do damage to their health! Be careful though, as each time you attack, your opoonent strikes you too! Do you have what it takes to make it past all of your opponents? Will you let the darkside consume you? GOOD LUCK"); }, 2000);

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
            };
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
        if ($(".player").is("#rey")){
            totalHealth = 1750;
            $("#health").text("HP: " + totalHealth);
            $(".power2").hide();
            originalAttack  = 70;
        } else if ($(".player").is("#luke")){
            totalHealth = 2000;
            $("#health").text("HP: " + totalHealth);
            $(".power1").hide();
            originalAttack  = 100;
        } else if ($(".player").is("#vader")){
            totalHealth  = 2500;
            $("#health").text("HP: " + totalHealth);
            $(".power3").hide();
            originalAttack = 150;
        } else if ($(".player").is("#han")){
            totalHealth  = 1500;
            $("#health").text("HP: " + totalHealth);
            $(".power4").hide();
            originalAttack = 80;
        };
        if ($(".oppoOne").is("#rey")){
            totalHealth2 = 1750;
            $("#health2").text("HP: " + totalHealth2);
            $(".power2").hide();
            oppoAttack = [150];
        } else if ($(".oppoOne").is("#luke")){
            totalHealth2 = 2000;
            $("#health2").text("HP: " + totalHealth2);
            $(".power1").hide();
            oppoAttack = [200];
        } else if ($(".oppoOne").is("#vader")){
            totalHealth2 = 2500;
            $("#health").text("HP: " + totalHealth2);
            $(".power3").hide();
            oppoAttack = [250];
        } else if ($(".oppoOne").is("#han")){
            totalHealth2 = 1500;
            $("#health2").text("HP: " + totalHealth2);
            $(".power4").hide();
            oppoAttack = [140];
        }    
            attackPlayer();
    };
    function playTwo(){
        if ($(".oppoTwo").is("#rey")){
            totalHealth2 = 1750;
            $("#health2").text("HP: " + totalHealth2);
            $(".power2").hide();
            oppoAttack = [150];
        } else if ($(".oppoTwo").is("#luke")){
            totalHealth2 = 2000;
            $("#health2").text("HP: " + totalHealth2);
            $(".power1").hide();
            oppoAttack = [200];
        } else if ($(".oppoTwo").is("#vader")){
            totalHealth2 = 2500;
            $("#health").text("HP: " + totalHealth2);
            $(".power3").hide();
            oppoAttack = [250];
        } else if ($(".oppoTwo").is("#han")){
            totalHealth2 = 1500;
            $("#health2").text("HP: " + totalHealth2);
            $(".power4").hide();
            oppoAttack = [140];
        }    
        attackPlayerTwo();
    };
    function playThree(){
        if ($(".oppoThree").is("#rey")){
            totalHealth2 = 1750;
            $("#health2").text("HP: " + totalHealth2);
            $(".power2").hide();
            oppoAttack = [150];
        } else if ($(".oppoThree").is("#luke")){
            totalHealth2 = 2000;
            $("#health2").text("HP: " + totalHealth2);
            $(".power1").hide();
            oppoAttack = [200];
        } else if ($(".oppoThree").is("#vader")){
            totalHealth2 = 2500;
            $("#health").text("HP: " + totalHealth2);
            $(".power3").hide();
            oppoAttack = [250];
        } else if ($(".oppoThree").is("#han")){
            totalHealth2 = 1500;
            $("#health2").text("HP: " + totalHealth2);
            $(".power4").hide();
            oppoAttack = [140];
        }    
        attackPlayerThree();
    };
        function attackPlayer(){
            $("#buttonOne").on("click", function(){
                attackOptions += originalAttack;
                if ((totalHealth2 > 0)) {
                    totalHealth = (totalHealth - oppoAttack);
                    $("#health").text("HP: " + totalHealth);
                    console.log("Your Health is ", totalHealth);
                    console.log("Opponent Attack was ", oppoAttack);
  
                    totalHealth2 = (totalHealth2 - attackOptions);
                    $("#health2").text("HP: " + totalHealth2);
                    console.log("Opponent Health ", totalHealth2);
                    console.log("Your Attack ", attackOptions );
                    
                    if ((totalHealth2 <=0)){
                        totalHealth2 = 0;
                        $("#health2").text("HP: " + totalHealth2);
                        alert("Choose Your Next Victim!");
                        chooseOppoTwo();
                    } else if ((totalHealth <= 0)){
                        alert("You LOSE! The Darkside has conqured your soul");
                        gameOver();
                    }  
                };
            }); 
        };
        function attackPlayerTwo(){
            $("#buttonOne").on("click", function(){
                attackOptions += originalAttack;
                if ((totalHealth2 > 0)) {
                    totalHealth = (totalHealth - oppoAttack);
                    $("#health").text("HP: " + totalHealth);
                    console.log("Your Health is ", totalHealth);
                    console.log("Opponent Attack was ", oppoAttack);

                    totalHealth2 = (totalHealth2 - attackOptions);
                    $("#health2").text("HP: " + totalHealth2);
                    console.log("Opponent Health ", totalHealth2);
                    console.log("Your Attack ", attackOptions);

                    if ((totalHealth <= 0)){
                        alert("You LOSE! The Darkside has conqured your soul");
                        gameOver();
                    } else if ((totalHealth2 <=0)){
                        totalHealth2 = 0;
                        $("#health2").text("HP: " + totalHealth2);
                        alert("One Opponent Left!");
                        chooseLastOppo();
                    };
                };
            });  
        };
        function attackPlayerThree(){
            $("#buttonOne").on("click", function(){
                attackOptions += originalAttack;
                if ((totalHealth2 > 0)) {
                    totalHealth = (totalHealth - oppoAttack);
                    $("#health").text("HP: " + totalHealth);
                    console.log("Your Health is ", totalHealth);
                    console.log("Opponent Attack was ", oppoAttack);
  
                    totalHealth2 = (totalHealth2 - attackOptions);
                    $("#health2").text("HP: " + totalHealth2);
                    console.log("Opponent Health ", totalHealth2);
                    console.log("Your Attack ", attackOptions);
               
                    if ((totalHealth2 <=0)){
                        totalHealth2 = 0;
                        $("#health2").text("HP: " + totalHealth2);
                        $(".lastOppo").remove(".lastOppo");
                        gameWinner();
                    } else if ((totalHealth <= 0)){
                        alert("You LOSE! The Darkside has conqured your soul");
                        gameOver();
                    };
                };  
            });  
        };
        function chooseOppoTwo(){
                $(".oppoOne").remove(".oppoOne");
                $("#characterWrapper").on("click",".nextOppo", function(){
                $(this).appendTo(".opponent");
                $(this).attr("class", "col-lg-6 oppoTwo");
            
                if ($(this).appendTo(".opponent")); {
                $(".nextOppo").attr("class", "col-lg-6 lastOppo");

                playTwo();
                }
            });
        };
        function chooseLastOppo(){
            $(".oppoTwo").remove(".oppoTwo");
            $("#characterWrapper").on("click",".lastOppo", function(){
                $(this).appendTo(".opponent");
                $(this).attr("class", "col-lg-6 oppoThree");
                if ($(this).appendTo(".opponent")); {
                    $(".available").hide();
                    playThree();
                };
            });
        };
        function gameOver(){
            resetGame();
        };
        function gameWinner(){
            alert("YOU WIN! CONGRATS! Play again if you'd like!");
            resetGame();
        };
        function resetGame(){



        choose();     
    };
};