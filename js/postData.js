
//Content is posted mainlly to index.html

//Content for .card (context is text about Kids,Adults, and types of dance)
var textData0 = "Dancing Training for Kids from age 7-13. Dancing styles for kids is Ballet, Street, Breack Dance and Steep Dance. ";
var textData1 = "Dancing Training for Adults and Youth from age 14- . Dancing styles for Adults is Ballet, Street and Breack Dance. ";
var textData2 = "At the Dancing lion we have classes in Baley, Street, Breack Dance and Steep Dance (Kids only).";

//Content for .card with alsow the class cardsRow4
var textData3 = "Info text for Ballet is working. ";
var textData4 = "Info text for breackdance is working. ";
var textData5 = "Info text for street dance is working.";
var textData6 = "Info text for steep dance is working. ";


//Jumbotron
var description1 = "Dancing Lion is a dancing school held on you free time. <br> We have classes for kids and youth and adults. Our goal is to teach you to express your self through movment as a artform. <br> We have classes in Baley both for kids and adults, Street dance for kids and adults, Breack dance for kids and adults and Steep dance only for kids. <br> Our values is disiplin and respedct and that everyone needs to have fun. <br> so if you have more questions or is intressted of starting send us a message below.";

window.onload = function(){
  //document.querySelectorAll(".card");
  var cardData = document.querySelectorAll(".card");
  //cardData[0].style.backgroundColor = "red";

  cardData[0].childNodes[3].childNodes[3].innerHTML= textData0;
  cardData[1].childNodes[3].childNodes[3].innerHTML= textData1;
  cardData[2].childNodes[3].childNodes[3].innerHTML= textData2;

  cardData[3].childNodes[3].childNodes[3].innerHTML= textData3;
  cardData[4].childNodes[3].childNodes[3].innerHTML= textData4;
  cardData[5].childNodes[3].childNodes[3].innerHTML= textData5;
  cardData[6].childNodes[3].childNodes[3].innerHTML= textData6;

  var des = document.querySelectorAll(".description");

  des[0].childNodes[3].innerHTML = description1;
};

//console.log(cardData);
