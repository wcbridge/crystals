var randomArray = [];
$("#target").text(targetNumber);
//var imagePath = [pathOne,pathTwo,pathThree,pathFour];
var counter = 0;
var targetNumber = Math.floor(Math.random() * 120) + 19;
for (i=0; i < 4; i++) {
    var cryCount = Math.floor(Math.random() * 12) + 1;
    if(randomArray.indexOf(cryCount) == -1) {
        randomArray.push(cryCount)
    }  
}
for (i=0; i<4; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    //imageCrystal.attr("src", "assets/images/" + imagePath[i] + "");
    imageCrystal.attr("src", "assets/images/crystalball.jpg");
    imageCrystal.attr("data-crystalValue", randomArray[i]);
    $(".crystals").append(imageCrystal);  
};
$(".crystal-image").click(function () {
var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue);
counter += crystalValue;
console.log(counter);
})








