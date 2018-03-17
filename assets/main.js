var win = 0;
var lose = 0;

var randomArray = [];
var counter = 0;
var targetNumber = Math.floor(Math.random() * 120) + 19;


document.getElementById("target").innerHTML = (targetNumber);
document.getElementById("counter").innerHTML = (counter);
//var imagePath = [pathOne,pathTwo,pathThree,pathFour];
randomArray = function () {
    return Math.floor(Math.random() * 12) + 1;
}
var cryCount = Array(4).fill(0).map(randomArray);
console.log(cryCount);

for (i = 0; i < 4; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    //imageCrystal.attr("src", "assets/images/" + imagePath[i] + "");
    imageCrystal.attr("src", "assets/images/crystalball.jpg");
    imageCrystal.attr("data-crystalValue", cryCount[i]);
    $(".crystals").append(imageCrystal);

};

function initialize() {
    counter = 0;
    targetNumber = Math.floor(Math.random() * 120) + 19;
    document.getElementById("target").innerHTML = (targetNumber);
    document.getElementById("counter").innerHTML = (counter);
    
    for (i = 0; i < 4; i++) {
        imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        //imageCrystal.attr("src", "assets/images/" + imagePath[i] + "");
     //   imageCrystal.attr("src", "assets/images/crystalball.jpg");
        imageCrystal.attr("data-crystalValue", cryCount[i]);
        $(".crystals").append(imageCrystal);
    };
}
$(".crystal-image").click(function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#counter").html(counter);
   
    
    if (targetNumber == counter) {
        win++;
        document.getElementById("wincount").innerHTML = "WIN : " + win;
        initialize();
    }
    else if (targetNumber < counter) {
        lose++;
        document.getElementById("losecount").innerHTML="Lose! " + lose;
        initialize();
    }
    console.log(counter);

})


    













