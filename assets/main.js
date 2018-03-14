var randomArray = [];
var counter = 0;
var targetNumber = Math.floor(Math.random() * 120) + 19;

document.getElementById("target").innerHTML = (targetNumber);
    //var imagePath = [pathOne,pathTwo,pathThree,pathFour];
var randomArray = function () {
    return Math.floor(Math.random() * 12) +1 ;
}
var cryCount = Array(4).fill(0).map(randomArray);
console.log(cryCount);

for (i=0; i<4; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    //imageCrystal.attr("src", "assets/images/" + imagePath[i] + "");
    imageCrystal.attr("src", "assets/images/crystalball.jpg");
    imageCrystal.attr("data-crystalValue", cryCount[i]);
    $(".crystals").append(imageCrystal);  
    
};
$(".crystal-image").click(function () {
var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue);
counter += crystalValue;
    document.getElementById("counter").innerHTML =(counter);
 if (targetNumber==counter){
    document.getElementById("win").innerHTML = "you win";
 }
 else if (targetNumber < counter){
     document.getElementById("lose").innerHTML = "you lose"; 
 }
 console.log(counter);

})








