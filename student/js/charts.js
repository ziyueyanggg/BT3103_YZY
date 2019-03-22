var db = firebase.initializeApp({databaseURL: "https://bt3103-mock-data.firebaseio.com/"}).database();
var TasksRef = db.ref("modules");
var app = new Vue({
    el: "#app",
    data: {
    },
    firebase: {
        charts: {
          source: db.ref("modules"),
          asObject: true
        }
    }
});
