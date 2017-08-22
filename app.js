  (function(){

  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAr_YxvV04UPsL3Th8oU8sXeIoJNlHs7Do",
    authDomain: "kono-f4f2d.firebaseapp.com",
    databaseURL: "https://kono-f4f2d.firebaseio.com",
    projectId: "kono-f4f2d",
    storageBucket: "kono-f4f2d.appspot.com",
    messagingSenderId: "177948466004"
  };
  firebase.initializeApp(config);

    const authPage = document.getElementById('authPage');
    const mainPage = document.getElementById('mainPage');
    // Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPass = document.getElementById('txtPass');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogOut = document.getElementById('btnLogOut');
    const uid = document.getElementById('uid');
      
    const txtName = document.getElementById('txtName');
    const txtSurname = document.getElementById('txtSurname');
    const btnReg = document.getElementById('btnReg');
    const btnLog = document.getElementById('btnLog');
    const login = document.getElementById('login');
    const register = document.getElementById('register');
      
    var database = firebase.database();
      
    //Add login Event
        btnLogin.addEventListener('click', e=>{
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
            console.log(firebaseUser);
            database.ref('users/'+ firebaseUser['uid']).update({
            profile_picture : 'imageUrl'
            });
            authPage.classList.add('hide');
            mainPage.classList.remove('hide');
             }
          else{
            console.log('not logged in');
             authPage.classList.remove('hide');
             mainPage.classList.add('hide');
          }
      });
      
      btnReg.addEventListener('click', e=>{
          login.classList.add('hide');
          register.classList.remove('hide');
      });
      
       btnLog.addEventListener('click', e=>{
          login.classList.remove('hide');
          register.classList.add('hide');
      });
      
           
      
  }());