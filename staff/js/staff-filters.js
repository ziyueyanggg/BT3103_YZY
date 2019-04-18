// Initialize Firebase
var config = {
    apiKey: "AIzaSyB1JARuE7DvGJBzWlyF-gXCz1WuUsynLmk",
    authDomain: "staff-grouping.firebaseapp.com",
    databaseURL: "https://staff-grouping.firebaseio.com",
    projectId: "staff-grouping",
    storageBucket: "staff-grouping.appspot.com",
    messagingSenderId: "360592801769"
    };
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');

document.getElementById("myForm").addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    var num = getInputVal('myNum');
    saveMessage(num);
}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(num){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        num: num
    });
}

