var app1 = firebase.initializeApp({databaseURL: "https://teamup-a3991.firebaseio.com/"});
var db = firebase.database()


var UserRef = db.ref("student");
var app = new Vue({
    el: "#app",
    data: {
      user: "",
      Modules:[]
    },
    firebase: {
      TasksFB: UserRef.limitToLast(10)
    },
    methods: {
      login: function() {
        if (this.user) {
          this.Modules = TasksRef.user;
        }
      },
      updateUser: function(){
          this.user = user;
      }
      }
});
