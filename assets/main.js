var win = 0;
var lose = 0;

function initialize(called) {
    counter = 0;
    targetNumber = Math.floor(Math.random() * 120) + 19;
    $("#target").html(targetNumber);
   $("#counter").html(counter);
    randomArray = function () {
        return Math.floor(Math.random() * 12) + 1;
    }
    var cryCount = Array(4).fill(0).map(randomArray);
    //console.log(cryCount);
    
    for (i = 0; i < 4; i++) {
        if (called) {
            imageCrystal = $("<img>");
            imageCrystal.addClass("crystal-image");
            //imageCrystal.attr("src", "assets/images/" + imagePath[i] + "");
            imageCrystal.attr("src", "assets/images/crystalball.jpg");
            //imageCrystal.attr("data-crystalValue", cryCount[i]);
            imageCrystal.attr("id", i) 
            $(".crystals").append(imageCrystal);
        }
        $("#" + i).attr("data-crystalValue", cryCount[i]);
    };
}
initialize(true)
$(".crystal-image").click(function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#counter").html(counter);
   
    
    if (targetNumber == counter) {
        win++;
        $("#wincount").html ("WIN : " + win);
        initialize(false);
    }
    else if (targetNumber < counter) {
        lose++;
        $("#losecount").html("Lose! " + lose);
        initialize(false);
    }
    //console.log(counter);

})


    













