
var login = () => {
    //login action
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var message = "email or Password is wrong"

    for(i= 0; i < users.length; i++){
      if (email == users[i].email && password == users[i].password) {
            window.location.replace(users[i].refPage);
            return;
          }
      }
      //Displays wrong message if username/password is incorrect
     document.querySelector('#wrongPass').innerHTML = message;
  };

  document.getElementById("password")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
      if (event.keyCode == 13) {
        document.getElementById("password").click(getInfo());
      }
    });


 /*
 // Checks witch page youre currently at and pops out the html

var currentPage = window.location.pathname.split('/').pop(); // Split will split the path into different obijects

// Accouts with acess to the page

var objPeople = [{
    username: "student",
    password: "student",
    account: "student",
    refPage: (currentPage === 'index.html' || currentPage === '') ? 'html/student/courses.html' : 'student/courses.html',

}, {
    username: "teacher",
    password: "teacher",
    account: "teacher",
    refPage: (currentPage === 'index.html' || currentPage === '') ? 'html/teacher/courses.html' : 'teacher/courses.html'
}, {
    username: "admin",
    password: "admin",
    account: "admin",
    refPage: (currentPage === 'index.html' || currentPage === '') ? 'html/admin/adminStart.html' : 'admin/adminStart.html'
}]



// Puts typed username and password into variables

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = "Du har skrivit in fel lösenord!";

    //Loops accouts and checks for matches
    for (i = 0; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
            window.location.replace(objPeople[i].refPage);
            return;
        }
    }

    //Displays wrong message if username/password is incorrect
    document.querySelector('#wrongPass').innerHTML = message;
}

document.getElementById("password")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("password").click(getInfo());
    }
});
 */

//const squares = arr.map(x => x  * x);

/*
$(function() {
  $('#login').bootstrapLogin();
  // use submit
  $('#login).bootstrapLogin({
      onSubmit: function(username, password) {
          if (username === 'admin' && password === 'admin') {
              location.href = 'http://wenzhixin.net.cn';
              return true;
          }
          return false;
      }
  });
});

var teacherstudents = {};
var count;
teachers[0].classes.forEach(function(teach) {
  count = 0;
  students.forEach(function(stud) {
    if (stud.classes.indexOf(teach) > -1)
      count++;
  })
  // gör en foreach på danceclasses för att få fram tider
  console.log(teach + ":" + count);
  // teacherstudent.push({teach: })
});
*/
