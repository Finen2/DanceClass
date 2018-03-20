
var login = () => {
    //login action
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var message = "email or Password is wrong"

    for(i= 0; i < users.length; i++){
      if (email == users[i].email && password == users[i].password) {
            window.location.replace(users[i].refPage);
            console.log("here there sould be a redirect to inloged page");
            return;
          }
      }
      //Displays wrong message if username/password is incorrect
     document.querySelector('#wrongPass').innerHTML = message;
  };

  document.getElementById("password"|| "email")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
      if (event.keyCode == 13) {
        document.getElementById("password"|| "email").click(login());
      }
    });
