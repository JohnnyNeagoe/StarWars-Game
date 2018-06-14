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
            
            firstOppo();
            };
        });
    };
    function firstOppo(){
        $("#characterWrapper").on("click",".oppo", function(){
        $(this).appendTo(".opponent");
        $(this).attr("class", "col-lg-6 oppoOne")

            if ($(this).appendTo(".opponent")); {
            $(".oppo").attr("class", "col-lg-6 nextOppo")
            
            onePlay();
            }
        });
        return onePlay;
    };
    function secondOppo(){
        $("#results1").html("Choose your next opponent from above!"); 
        $("#results2").html("Use the FORCE young protégé!");
        $(".oppoOne").remove(".oppoOne");
        $("#characterWrapper").on("click",".nextOppo", function(){
        $(this).appendTo(".opponent");
        $(this).attr("class", "col-lg-6 oppoTwo");
    
            if ($(this).appendTo(".opponent")); {
            $(".nextOppo").attr("class", "col-lg-6 lastOppo");

            twoPlay();
            }
        });
        return twoPlay;
    };
    function lastOppo(){
        $("#results1").html("Choose your next opponent from above!"); 
        $("#results2").html("One last foe and you WIN! The force is strong with you");
        $("#characterWrapper").on("click", ".lastOppo", function(){
        $(".oppoTwo").remove(".oppoTwo");
        $(this).appendTo(".opponent");
        $(this).attr("class", "col-lg-6 oppoThree");

            if ($(this).appendTo(".opponent")); {
            $(".available").hide();
            
            threePlay();
            };
        });
        return threePlay;
    };

    function onePlay(){
        if ($(".player").is("#rey")){
            totalHealth = 2750;
            $("#health").text("HP: " + totalHealth);
            $(".power2").hide();
            originalAttack  = 85;
        } else if ($(".player").is("#luke")){
            totalHealth = 3500;
            $("#health").text("HP: " + totalHealth);
            $(".power1").hide();
            originalAttack  = 100;
        } else if ($(".player").is("#vader")){
            totalHealth  = 3000;
            $("#health").text("HP: " + totalHealth);
            $(".power3").hide();
            originalAttack = 125;
        } else if ($(".player").is("#han")){
            totalHealth  = 2500;
            $("#health").text("HP: " + totalHealth);
            $(".power4").hide();
            originalAttack = 80;
        };
        if ($(".oppoOne").is("#rey")){
            totalHealth2 = 2750;
            $("#health2").text("HP: " + totalHealth2);
            $(".power2").hide();
            oppoAttack = [120];
        } else if ($(".oppoOne").is("#luke")){
            totalHealth2 = 3500;
            $("#health2").text("HP: " + totalHealth2);
            $(".power1").hide();
            oppoAttack = [130];
        } else if ($(".oppoOne").is("#vader")){
            totalHealth2 = 3000;
            $("#health2").text("HP: " + totalHealth2);
            $(".power3").hide();
            oppoAttack = [200];
        } else if ($(".oppoOne").is("#han")){
            totalHealth2 = 2500;
            $("#health2").text("HP: " + totalHealth2);
            $(".power4").hide();
            oppoAttack = [110];
        }    
            firstAttack();
    };
    function twoPlay(){
        if ($(".oppoTwo").is("#rey")){
            totalHealth2 = 2750;
            $("#health2").text("HP: " + totalHealth2);
            $(".power2").hide();
            oppoAttack = [120];
        } else if ($(".oppoTwo").is("#luke")){
            totalHealth2 = 3500;
            $("#health2").text("HP: " + totalHealth2);
            $(".power1").hide();
            oppoAttack = [130];
        } else if ($(".oppoTwo").is("#vader")){
            totalHealth2 = 3000;
            $("#health").text("HP: " + totalHealth2);
            $(".power3").hide();
            oppoAttack = [200];
        } else if ($(".oppoTwo").is("#han")){
            totalHealth2 = 2500;
            $("#health2").text("HP: " + totalHealth2);
            $(".power4").hide();
            oppoAttack = [110];
        }    
        secondAttack();
    };
    function threePlay(){
        if ($(".oppoThree").is("#rey")){
            totalHealth2 = 2750;
            $("#health2").text("HP: " + totalHealth2);
            $(".power2").hide();
            oppoAttack = [120];
        } else if ($(".oppoThree").is("#luke")){
            totalHealth2 = 3500;
            $("#health2").text("HP: " + totalHealth2);
            $(".power1").hide();
            oppoAttack = [130];
        } else if ($(".oppoThree").is("#vader")){
            totalHealth2 = 3000;
            $("#health").text("HP: " + totalHealth2);
            $(".power3").hide();
            oppoAttack = [200];
        } else if ($(".oppoThree").is("#han")){
            totalHealth2 = 2500;
            $("#health2").text("HP: " + totalHealth2);
            $(".power4").hide();
            oppoAttack = [110];
        }    
        thirdAttack();
    };
        function firstAttack(){
            $("#buttonOne").on("click", function(){
                attackOptions += originalAttack;
                if ((totalHealth2 > 0)) {
                    totalHealth = (totalHealth - oppoAttack);
                    $("#health").text("HP: " + totalHealth);
  
                    totalHealth2 = (totalHealth2 - attackOptions);
                    $("#health2").text("HP: " + totalHealth2);
                    $("#results1").html("Your last attack did " + " " + attackOptions + " " + "damage!"); 
                    $("#results2").html("Opponent's last attack did " + oppoAttack +  " " + "damage!");
                    
                    if ((totalHealth <= 0)){
                        gameOver();
                    } else if ((totalHealth2 <=0)){
                        $("#health2").text("HP: " + totalHealth2);
                        secondOppo();
                    }  
                };
            }); 
            return firstAttack; 
        };
        function secondAttack(){
            $("#buttonOne").on("click", function(){
                attackOptions += originalAttack;
                if ((totalHealth2 > 0)) {
                    totalHealth = (totalHealth - oppoAttack);
                    $("#health").text("HP: " + totalHealth);

                    totalHealth2 = (totalHealth2 - attackOptions);
                    $("#health2").text("HP: " + totalHealth2);
                    $("#results1").html("Your last attack did " + " " + attackOptions + " " + "damage!"); 
                    $("#results2").html("Opponent's last attack did " + oppoAttack +  " " + "damage!");

                    if ((totalHealth <= 0)){
                        gameOver();
                    } else if ((totalHealth2 <=0)){
                        $("#health2").text("HP: " + totalHealth2);
                        lastOppo();
                        
                    };
                };
            }); 
            return secondAttack; 
        };
        function thirdAttack(){
            $("#buttonOne").on("click", function(){
                attackOptions += originalAttack;
                if ((totalHealth2 > 0)) {
                    totalHealth = (totalHealth - oppoAttack);
                    $("#health").text("HP: " + totalHealth);
  
                    totalHealth2 = (totalHealth2 - attackOptions);
                    $("#health2").text("HP: " + totalHealth2);
                    $("#results1").html("Your last attack did " + " " + attackOptions + " " + "damage!"); 
                    $("#results2").html("Opponent's last attack did " + oppoAttack +  " " + "damage!");
               
                    if ((totalHealth <= 0)){
                    gameOver();

                    } else if ((totalHealth2 <=0)){
                        $("#health2").text("HP: " + totalHealth2);
                        $(".lastOppo").remove(".lastOppo");
                        gameWinner();
                    
                    };
                };  
            }); 
            return thirdAttack; 
        };
       
        function gameOver(){
            alert("You LOSE! The Darkside has conqured your soul");
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