var text = document.getElementById("email");
var text = document.getElementById("name");
var text = document.getElementById("date");
var text = document.getElementById("place");
var text = document.getElementById("type");
var button = document.getElementById("button");
var head = document.getElementById("head");

function myclick(){
var val = text.value;
window.alert(val);
var firebaseRef = firebase.database().ref();
firebaseRef.set(val);
}