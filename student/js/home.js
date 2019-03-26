var mainApp = {};


(function(){
    var firebase = app_fireBase;
var uid = null;

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        uid = user.uid;
      }else{
        // Redirect to login page
        uid = null;
          window.location.replace("../html/login.html");
      }
    });

  function logOut(){
    firebase.auth().signOut();
  }

  mainApp.logOut = logOut;

})()
