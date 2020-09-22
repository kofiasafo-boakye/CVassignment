// Import stylesheets
import './style.css';

const form = document.getElementById("addForm");
// Write Javascript code!
function onSubmit(event) {
  event.preventDefault(); 
  

  
   const first= form.elements["f_name"].value;
   const middle= form.elements["m_name"].value;
   const last = form.elements["l_name"].value;
   const gender = form.elements["gender"].value;
   const phone = form.elements["phone"].value;
   const email = form.elements["email"].value;
   const address = form.elements["address"].value;

   if (first === "" || middle === "" || last === "" || gender === "" || phone === "" || email === "" || address === ""){
      document.getElementById("first").classList.remove("boxhighlight")
      document.getElementById("middle").classList.remove("boxhighlight")
      document.getElementById("last").classList.remove("boxhighlight")
      document.getElementById("phone").classList.remove("boxhighlight")
      document.getElementById("email").classList.remove("boxhighlight")
      document.getElementById("address").classList.remove("boxhighlight")


      if(first === ""){
       document.getElementById("first").classList.add("boxhighlight")
     }
     if(first === ""){
       document.getElementById("middle").classList.add("boxhighlight")
     }
     if(last === ""){
       document.getElementById("last").classList.add("boxhighlight")
     }
     if(first === ""){
       document.getElementById("phone").classList.add("boxhighlight")
     }
     if(email === ""){
       document.getElementById("email").classList.add("boxhighlight")
     }
     if(first === ""){
       document.getElementById("address").classList.add("boxhighlight")
     }
     document.getElementById("form-errors").innerHTML = `<p> Error! Please fill highlighted fields</p>`;
   }
   else{
       document.getElementById("form-errors").innerHTML = ``;
       document.getElementById("first").classList.remove("boxhighlight")
       document.getElementById("middle").classList.remove("boxhighlight")
       document.getElementById("last").classList.remove("boxhighlight")
       document.getElementById("phone").classList.remove("boxhighlight")
       document.getElementById("email").classList.remove("boxhighlight")
       document.getElementById("address").classList.remove("boxhighlight")
   }   
}

function passvalue(){
  var firstname = document.getElementById("first").value;
  localStorage.setItem("textvalue", firstname);
  return false;
}

form.addEventListener('submit',onSubmit)
