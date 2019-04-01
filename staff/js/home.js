var mainApp = {};

(function(){
    var firebase = app_fireBase;
var uid = null;

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        uid = user.uid;
        useremail = user.email;

        var app3 = firebase.initializeApp({databaseURL: "https://teamup-a3991.firebaseio.com/"}, "app3");
        var db = firebase.database(app3);

        var app3 = new Vue({
          el: "#app3",
          data: {
            user: useremail.slice(0,-10)
          },
          firebase: {
              student: db.ref("student/" + useremail.slice(0,-10) + "/module")
          }
        });
      }else{
        // Redirect to login page
        uid = null;
          window.location.replace("../html/staff-login.html");
      }
    });

  function logOut(){
    firebase.auth().signOut();
  }

  mainApp.logOut = logOut;



})();
