  (function(){


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBj8XzZXuXGeGGX2n-QyKeH8aT9337lByI",
    authDomain: "web-quickstart-3f106.firebaseapp.com",
    databaseURL: "https://web-quickstart-3f106.firebaseio.com",
    projectId: "web-quickstart-3f106",
    storageBucket: "web-quickstart-3f106.appspot.com",
    messagingSenderId: "258391919909"
  };
  firebase.initializeApp(config);



    // Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPass = document.getElementById('txtPass');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogOut = document.getElementById('btnLogOut');
    const uid = document.getElementById('uid');
      
    var database = firebase.database();
      
    //Add login Event
        btnLogin.addEventListener('click', e=> {
        //Get email and pass
        const email = txtEmail.value;
        const pass = txtPass.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
        
    });
      
      //Add signup event
      btnSignUp.addEventListener('click', e=> {
        //Get email and pass
        const email = txtEmail.value;
        const pass = txtPass.value;
        const auth = firebase.auth();
        //Sign in
        const promise  = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
      });
    
          
        
      btnLogOut.addEventListener('click', e=> {
          firebase.auth().signOut();
      });
      
      // Add a realtime listener
      firebase.auth().onAuthStateChanged(firebaseUser => {
          if(firebaseUser){
            uid.value =  firebaseUser['uid'];
            console.log(firebaseUser);
             }
          else{
              console.log('not logged in');
          }
      });
      
           
      
  }());