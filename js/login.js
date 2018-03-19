
var login = () => {
    //login action
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    for(i= 0; i < users.length; i++)
      if(email == users[i].email && password == users[i].password){
        alert("Jippi");
        console.log('you are logged in');
      }else{
        alert("wrong user/pass");
        console.log('Error');
      }
  };

 console.log(users);

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
