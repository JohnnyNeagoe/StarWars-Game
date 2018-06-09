//Choose Your Fighter


document.onload = setTimeout(function () { alert("Rules: Choose your fighter by clicking on one of the characters on this page. Once your fighter is chosen, you will decide who they will go up against by clicking on another character. Once an Opponent is chosen, click the attack button to do damage to their health! Be careful though, as each time you attack, your opoonent strikes you too! Do you have what it takes to make it past all of your opponents? Will you let the darkside consume you? GOOD LUCK"); }, 500);
playGame();


function playGame(){

    choose();

    function choose(){
        $("#characterWrapper").on("click",".chosen", function(){
        $(this).appendTo(".yourFighter");
        $(this).attr("class", "col-lg-12")

            if ($(this).appendTo(".yourFighter")); {
            $("#characterWrapper").appendTo(".eta");
            $(".chosen").attr("class", "col-lg-4")
            $("#peace").hide();
            $(versus())
            }
        });
    };
    function versus(){
        $("#characterWrapper").on("click",".chosen", function(){
        $(this).appendTo(".opponent");
        });
    }











};