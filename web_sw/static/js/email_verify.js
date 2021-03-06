



$( document ).ready(function() {




  document.querySelector("#verify_email_btn").addEventListener("click",function(){

      const email = document.querySelector('input[name="email_input"]');
     document.getElementById("verify_email_input").style.display="none";
     document.getElementById("verify_email_btn").style.display="none";
     document.getElementById("verify_pass_input").style.display="block";
     document.getElementById("verify_pass_btn").style.display="block";

      $.ajax({

                  type: "POST",
                  url: "/login/verify",
                  data: JSON.stringify(email.value),
                  contentType: "application/json",
                  dataType: 'json'
       }).done(function(data){
        if (data.status=="ok"){
           alert('verify code sent your email!', 'success')
        }else{
          alert('Email is not valid', 'success')
        }
       });

  });


const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const alert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" id="btn_close" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  alertPlaceholder.append(wrapper);
}


 document.querySelector("#verify_pass_btn").addEventListener("click",function(){
     const pass = document.querySelector('input[name="pass_input"]');
       $.ajax({
                  type: "POST",
                  url: "/pass/verify",
                  data: JSON.stringify(pass.value),
                  contentType: "application/json",
                  dataType: 'json'

       }).done(function(data){
         if(data.status=="ok"){
         alert('Email verified','success')
         }else{
         alert('Pass is not valid','success')
         }
       });


  });

function display_email(){



  // document.getElementById("input[name='email_input']")=''
   document.getElementById("verify_email_btn").innerHTML='Verify Email'
   document.getElementById("verify_email_input").style.display="block";
     document.getElementById("verify_email_btn").style.display="block";
     document.getElementById("verify_pass_input").style.display="none";
     document.getElementById("verify_pass_btn").style.display="none";
}

document.querySelector(".open-button").addEventListener("click",function(){
 document.getElementById("myForm").style.display = "block";
 document.getElementById("verify_pass_input").style.display="none";
  document.getElementById("verify_pass_btn").style.display="none";


});


document.querySelector(".cancel").addEventListener("click",function(){
 display_email();
document.getElementById("myForm").style.display = "none";

});



});
