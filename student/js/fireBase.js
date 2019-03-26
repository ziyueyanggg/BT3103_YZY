var app_fireBase = {};
(function(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDlHXvvO3SNI9A_ZeA71-BxqEUOKf4-Xtw",
      authDomain: "teamup-a3991.firebaseapp.com",
      databaseURL: "https://teamup-a3991.firebaseio.com",
      projectId: "teamup-a3991",
      storageBucket: "teamup-a3991.appspot.com",
      messagingSenderId: "309434661248"
    };
    firebase.initializeApp(config);

    app_fireBase = firebase;
})()
