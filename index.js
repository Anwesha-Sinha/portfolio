let sendButton = document.getElementById('send');
let resetButton = document.getElementById('reset');
let form = document.getElementById('form');


form.addEventListener('submit', function(e){
    e.preventDefault();
})

resetButton.addEventListener('click', function(){
  
    let name = document.getElementById('name');
   let email = document.getElementById('email');
    let mobile = document.getElementById('mobile');
    let message= document.getElementById('message');

    name.value = '';
    email.value = '';
    mobile.value = '';
    message.value='';
})

sendButton.addEventListener('click', function(e){
    
     let name = document.getElementById('name');
     let email = document.getElementById('email');
    let mobile = document.getElementById('mobile');
    let message = document.getElementById('message');

    name = name.value;
    localStorage.setItem('name', name);

    email = email.value;
    localStorage.setItem('email', email);

    mobile = mobile.value;
    localStorage.setItem('mobile', mobile);

    message = message.value;
    localStorage.setItem('message', message);
     

}) 




