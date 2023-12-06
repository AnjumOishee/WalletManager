function signin(){ 
    var email = document.getElementById('email').value; 
    var pass = document.getElementById('password').value; 
 

    var fixed_mail = "jr.dev101@gmail.com"; 
    var fixed_Pass= "123456#"; 
     
    if(email ==  fixed_mail && pass == fixed_Pass){ 
        window.location.href = 'wallet.html'; 
    } 
    else{ 
        alert('Invalid email or password. Please try again.'); 
        document.getElement
    }
}