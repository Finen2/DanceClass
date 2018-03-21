
//Content is posted mainlly to index.html

//Content for .card (context is text about Kids,Adults, and types of dance)
var textData0 = "Dancing Training for Kids from age 7-13. Dancing styles for kids is Baley, Street, Breack Dance and Steep Dance. ";
var textData1 = "Dancing Training for Adults and Youth from age 14- . Dancing styles for Adults is Baley, Street and Breack Dance. ";
var textData2 = "At the Dancing lion we have classes in Baley, Street, Breack Dance and Steep Dance (Kids only).";

//Jumbotron
var description1 = "Hahahahaha <br> hfajfdaj";

window.onload = function(){
  //document.querySelectorAll(".card");
  var cardData = document.querySelectorAll(".card");
  //cardData[0].style.backgroundColor = "red";

  cardData[0].childNodes[3].childNodes[3].innerHTML= textData0;
  cardData[1].childNodes[3].childNodes[3].innerHTML= textData1;
  cardData[2].childNodes[3].childNodes[3].innerHTML= textData2;

  var des = document.querySelectorAll(".description");

  des[0].childNodes[3].innerHTML = description1;
};

//console.log(cardData);
