var totalHealth = 0;
var totalHealth2 = 0;
var attackOptions = 0;
var oppoAttack = [];
var originalAttack = 0;
var audio = new Audio("assets/sounds/theme.mp3");
$(window).on("load", function(){
    $(".one").hide(); $("#two").hide();$("#four").hide(); $("#results1").hide(); $("#results2").hide();$("#zaza").hide();
});
$(".vol").on("click", function(){
    audio.pause();
});
playGame();
function playGame(){
    choose();
    
    function choose(){
        $("#characterWrapper").on("click",".chosen", function(){
        audio.play();
        audio.volume = 0.2;
        $(this).appendTo(".yourFighter");
        $(this).attr("class", "col-lg-12 player")
        $(".one").show(); 
        $("#three").remove(); 
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
        $("#four").show(); 
        $("#zaza").show();
            if ($(this).appendTo(".opponent")); {
            $(".oppo").attr("class", "col-lg-6 nextOppo")
            onePlay();
            }
        });
        function onePlay(){
            if ($(".player").is("#rey")){
                totalHealth = 2700;
                $("#health").text("HP: " + totalHealth);
                $(".power2").hide();
                originalAttack  = 70;
            } else if ($(".player").is("#luke")){
                totalHealth = 3300;
                $("#health").text("HP: " + totalHealth);
                $(".power1").hide();
                originalAttack  = 80;
            } else if ($(".player").is("#vader")){
                totalHealth  = 2600;
                $("#health").text("HP: " + totalHealth);
                $(".power3").hide();
                originalAttack = 90;
            } else if ($(".player").is("#han")){
                totalHealth  = 2900;
                $("#health").text("HP: " + totalHealth);
                $(".power4").hide();
                originalAttack = 50;
            };
            if ($(".oppoOne").is("#rey")){
                totalHealth2 = 2700;
                $("#health2").text("HP: " + totalHealth2);
                $(".power2").hide();
                oppoAttack = [150];
            } else if ($(".oppoOne").is("#luke")){
                totalHealth2 = 3300;
                $("#health2").text("HP: " + totalHealth2);
                $(".power1").hide();
                oppoAttack = [185];
            } else if ($(".oppoOne").is("#vader")){
                totalHealth2 = 2500;
                $("#health2").text("HP: " + totalHealth2);
                $(".power3").hide();
                oppoAttack = [220];
            } else if ($(".oppoOne").is("#han")){
                totalHealth2 = 2900;
                $("#health2").text("HP: " + totalHealth2);
                $(".power4").hide();
                oppoAttack = [130];
            }    
                jediAttack();
        };
    };
    function secondOppo(){
        $("#results1").html("Choose your next opponent from above!"); 
        $("#results2").html("Use the FORCE young protégé!");
        $("#characterWrapper").on("click",".nextOppo", function(){
        $(this).appendTo(".opponent");
        $(this).attr("class", "col-lg-6 oppoTwo");
        $(".oppoOne").detach(".oppoOne");
            if ($(this).appendTo(".opponent")) {
            $(".nextOppo").attr("class", "col-lg-6 lastOppo");
            twoPlay();
            }
        });
        function twoPlay(){
            if ($(".oppoTwo").is("#rey")){
                totalHealth2 = 2700;
                $("#health2").text("HP: " + totalHealth2);
                $(".power2").hide();
                oppoAttack = [150];
            } else if ($(".oppoTwo").is("#luke")){
                totalHealth2 = 3300;
                $("#health2").text("HP: " + totalHealth2);
                $(".power1").hide();
                oppoAttack = [185];
            } else if ($(".oppoTwo").is("#vader")){
                totalHealth2 = 2500;
                $("#health2").text("HP: " + totalHealth2);
                $(".power3").hide();
                oppoAttack = [220];
            } else if ($(".oppoTwo").is("#han")){
                totalHealth2 = 2900;
                $("#health2").text("HP: " + totalHealth2);
                $(".power4").hide();
                oppoAttack = [130];
            };
        };
    };
    function thirdOppo(){
        $("#results1").html("Choose your next opponent from above! Fear is the path to the Dark Side."); 
        $("#results2").html("One last adversary and you WIN! The force is strong with you");
        $("#characterWrapper").on("click",".lastOppo", function() {
        $(".lastOppo").appendTo(".opponent");
        $(".lastOppo").attr("class", "col-lg-6 oppoThree");
        $(".oppoTwo").detach(".oppoTwo");
            if ($(".lastOppo").appendTo(".opponent")) {
            $(".available").hide();
            threePlay();
            }
        });
        function threePlay(){
            if ($(".oppoThree").is("#rey")){
                totalHealth2 = 2700;
                $("#health2").text("HP: " + totalHealth2);
                $(".power2").hide();
                oppoAttack = [150];
            } else if ($(".oppoThree").is("#luke")){
                totalHealth2 = 3300;
                $("#health2").text("HP: " + totalHealth2);
                $(".power1").hide();
                oppoAttack = [185];
            } else if ($(".oppoThree").is("#vader")){
                totalHealth2 = 2500;
                $("#health2").text("HP: " + totalHealth2);
                $(".power3").hide();
                oppoAttack = [220];
            } else if ($(".oppoThree").is("#han")){
                totalHealth2 = 2900;
                $("#health2").text("HP: " + totalHealth2);
                $(".power4").hide();
                oppoAttack = [130];
            };   
            lastFight();
        };
    };
    function jediAttack(){
        $("#buttonOne").on("click", function(){
        $("#results1").show(); $("#results2").show(); $("#two").show();
            if ((totalHealth2 > 0)) {
                lightSaber();
                attackOptions += originalAttack;
                totalHealth = (totalHealth - oppoAttack);
                $("#health").text("HP: " + totalHealth);
                totalHealth2 = (totalHealth2 - attackOptions);
                $("#health2").text("HP: " + totalHealth2);
                $("#results1").html("Your last attack did " + " " + attackOptions + " " + "damage!"); 
                $("#results2").html("Opponent's last attack did " + oppoAttack +  " " + "damage!");
                console.log(attackOptions);
                if ((totalHealth2 <=0 && totalHealth <=0)) {
                    tieGame();
                } else if ((totalHealth <= 0)){
                    gameOver();
                } else if ((totalHealth2 <=0)){
                    totalHealth2 = 0;
                    $("#health2").text("HP: " + totalHealth2);
                    oppoList();
                }  
            };
        });
    };
        function oppoList() {
            if ((attackOptions < 690)){
            secondOppo();
            } else if ((attackOptions <= 720 && originalAttack >= 70)){
            secondOppo();
            } else if ((attackOptions <= 820 && originalAttack >= 90)){
            secondOppo();
            } else thirdOppo();
        };
        function lastFight(){
            $("#buttonOne").on("click", function(){
                if ((totalHealth2 <=0 && totalHealth <=0)) {
                    resetGame();
                } else if((totalHealth2 <=0)){
                    $("#health2").text("HP: " + totalHealth2);
                    gameWinner();
                }  
            });
        };
    function gameOver(){
        alert("You LOSE! I find your lack of faith disturbing.");
        resetGame();
    };
    function gameWinner(){
        alert("YOU WIN! The Force is Strong with You!");
        resetGame();
    };
    function tieGame(){
        alert("It's a Draw! Remember…the Force will be with you, always.");
        resetGame();
    }
    function resetGame(){
            location.reload();
            playGame();    
    };
    function playSound(fx) {
        var audio1 = new Audio(fx);  
        audio1.play();
      }
      function lightSaber() {
        var arr = ['assets/sounds/Heavy_swing_2.mp4', 'assets/sounds/Light_swing_1.mp4', 'assets/sounds/Hit_1.mp4', 'assets/sounds/Light_swing_2.mp4', 'assets/sounds/Hit_2.mp4'];
        var randIndex = Math.floor(Math.random() * arr.length);
        playSound(arr[randIndex]);
      }
};