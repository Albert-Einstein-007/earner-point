var firebaseConfig = {
  apiKey: "AIzaSyARCm_kFBPq9XoiZAK7swK8BAr9uOLutzQ",
  authDomain: "earning-abin.firebaseapp.com",
  databaseURL: "https://earning-abin-default-rtdb.firebaseio.com",
  projectId: "earning-abin",
  storageBucket: "earning-abin.appspot.com",
  messagingSenderId: "886534271036",
  appId: "1:886534271036:web:25e481dfb0008cf80b5339"
};
firebase.initializeApp(firebaseConfig);

								
													function submit(){
													
													var paynum	= document.getElementById("paynum").value;
							var email = document.getElementById("email").value;
							var pass = document.getElementById("pass").value;
								var database = firebase.database();
								
								var check = firebase.database().ref("mobile");
check.once("value")
  .then(function(snapshot){
 var check1 = snapshot.child(paynum).exists()
  
  if (check1) {
  				
  				alert("Mobile Number Already Registered , Please Login Using Your Password")
  }
  
  else 
  				
  
  				
								
								var numlg = paynum.length;
								
								if(numlg !== 10) {
												alert("Enter A Valid Mobile Number You Can't Change This Later!!");
								}else 
								if(email.indexOf("@gmail.com") != -1){
																
																var ref = firebase.database().ref("userinfo");
ref.once("value")
  .then(function(snapshot) {
    let number = snapshot.numChildren();
    console.log(number)
var number1 = number+1000
		
												database.ref("mobile/"+paynum).set({
																pass: pass
																
												})
												
												
         
												
												database.ref("userinfo/"+number1).set({
												Email: email,
												mobile: paynum,
												pass: pass,
												reffer: "0"
												})
								
								})
								
																
												}else {
																alert("Enter A Valid E-mail Address You Can't Change This Later!!");
												
												
								
								
							}
});
}
							
				
