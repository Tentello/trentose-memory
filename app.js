/* your code should go here */
var template =  "<li id=\"idTemplate\" class=\"done\">"+
                "<h3>numberTemplate</h3>"+
                "</li>";

var CURRENT = 1;
// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet

$(document).ready(function(){
    start();
    $(".opt-start").click(function(){
        for(var i=1; i<=10; i++){
            $("#"+i).attr("class","hidden");
        }
        $(".hidden").click(function(){
            if(CURRENT==$(this).children().text()){
                CURRENT += 1;
                $(this).attr("class","done");
                if(CURRENT==11){
                    alert("You Win");
                    CURRENT=1;
                    clean();
                    start();
                }
            } else {
                alert("You Lost!");
                CURRENT=1;
                clean();
                start();
            }
        });
    });
    
});
function clean(){
    $(".cards").empty();
}

function start(){
    data = generateData(10);
    for(var i=0; i<10; i++){
        var x = template.replace("idTemplate", data[i]);
        x = x.replace("numberTemplate", data[i]);
        $(".cards").append(x);
    }
}







