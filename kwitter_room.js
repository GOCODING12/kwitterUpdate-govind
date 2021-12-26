const firebaseConfig = {
      apiKey: "AIzaSyAg2S3U-X03N5drnxRZz7fX1tGrwunrNtk",
      authDomain: "kwitter--web.firebaseapp.com",
      databaseURL: "https://kwitter--web-default-rtdb.firebaseio.com",
      projectId: "kwitter--web",
      storageBucket: "kwitter--web.appspot.com",
      messagingSenderId: "1037553510905",
      appId: "1:1037553510905:web:4ae23e342b7770b1bb3528",
      measurementId: "G-VWKRJKR4LX"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name -"+Room_names);
     row = "<div class='room_nmae'id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>"; 
     document.getElementById("output").innerHTML += row;
      //End code 
      function redirectToRoomName() {
       console.log(name);
       localStorage.setItem("room_name" , name)  
       window.location = "kwitter_page.html"
      }
      });});}
getData();
 function addRoom() {
       room_name = document.getElementById("room_name").value; 
       firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
       }) 

       localStorage.setItem("room_nmae", room_name);

       window.location = "kwitter_page.html"
 } 

 function logout() {
  localStorage.removeItem("user_nmae");
  localStorage.removeItem("room_name"); 
       window.location = "index.html";   
 } 

 function send() {
     msg = document.getElementById("msg").value; 
     firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      Like:0
     });
       document.getElementById("msg").value = "";
     }
 