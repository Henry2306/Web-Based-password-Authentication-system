 firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	document.getElementById("user_div").style.display = "block";
    document.getElementById("myFormm").style.display = "none";
   location.replace("web.html")

  var user = firebase.auth().currentUser;
  if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }
    // User is signed in.
  } else {
  	document.getElementById("user_div").style.display = "none";
    document.getElementById("myFormm").style.display = "block";
    // No user is signed in.
  } 
});


function closeForm(){
	alert("hi");
}


 function login(){
	var username=document.getElementById('emailfield').value;
	var pass=document.getElementById('passwordfield').value;
	alert("hi");


	firebase.auth().signInWithEmailAndPassword(username, pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  });

}
function logout(){
  firebase.auth().signOut()
}
