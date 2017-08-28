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
    const btnReg = document.getElementById('btnReg');
    const btnLog = document.getElementById('btnLog');
    const login = document.getElementById('login');
    const registerLabel = document.getElementById('registerLabel');
    const loginLabel = document.getElementById('loginLabel');
    const divName = document.getElementById('divName');
      
    var user = firebase.auth().currentUser;
    var database = firebase.database();
    
    const loader = document.getElementById('loader');
      
    //Add login Event
        btnLogin.addEventListener('click', e=>{
         loader.classList.remove('hide');
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
        loader.classList.remove('hide');
        //Get email and pass
        const email = txtEmail.value;
        const pass = txtPass.value;
        const auth = firebase.auth();
        //Sign in
        const promise  = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
        database.ref('users/'+ e['uid']).update({
            name: txtName.value,
            profile_picture : 'imageUrl'
            });
      });
    
          
        
      btnLogOut.addEventListener('click', e=> {
          firebase.auth().signOut();
      });
      
      // Add a realtime listener
      firebase.auth().onAuthStateChanged(firebaseUser => {
          loader.classList.add('hide');
          if(firebaseUser){
            console.log(firebaseUser);
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
          btnReg.classList.add('hide');
          btnLogin.classList.add('hide');
          loginLabel.classList.add('hide');
          
          btnLog.classList.remove('hide');
          btnSignUp.classList.remove('hide');
          registerLabel.classList.remove('hide');
          divName.classList.remove('hide');
          
      });
      
       btnLog.addEventListener('click', e=>{
          btnReg.classList.remove('hide');
          btnLogin.classList.remove('hide');
          loginLabel.classList.remove('hide');          
          
          btnLog.classList.add('hide');
          btnSignUp.classList.add('hide');
          registerLabel.classList.add('hide');
          divName.classList.add('hide');
      });
      
           
      
  }());