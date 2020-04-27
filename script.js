
function check(id, reg){
    let value = document.getElementById(id).value;
        if(value == "" || !reg.test(value)){
     document.getElementById(id).style.border ="3px solid red"; 
    return false;
    }
    else{
      return true;
    }
  }
function checking(){
  
  let error = true;
    if(!check("name", /[a-zA-Z]+$/))
    error = false;
    if(!check("surname", /[a-zA-Z]+$/))
    error = false;
    if(!check("indate", /[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/))
    error = false;
    if(!check("outdate", /[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/))
    error = false;
    if(!check("number", /[0-9]+$/))
    error = false;
    if(!check("email",/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/))
    error = false;
    if(!check("phone", /[0-9]+$/))
    error = false;
  if(error) 
    document.getElementById("form").submit()
  }
  
  /*document.getElementById("buttoncheck").addEventListener('mouseover', function(){
            let textshow = document.getElementById("buttoncheck");
            textshow.title = this.sourceName;
        })*/

