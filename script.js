
function submitForm(){ 
    let gender = (document.getElementById)("gender").value;
    let bday = (document.getElementById)("day").value;

    let dateOfBirth = new Date(bday);  
    let theDay = dateOfBirth.getDay();
    // name1.innerText = theDay;
//   console.log(theDay);

  let mmale = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  let ffemale = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  
  if(bday.value===""){
    alert("Enter Value")
  }

  if(gender === "Male" && theDay === 0  ){
        name1.innerText = "Your Akan name is" + " " + mmale[0];
    }else if(gender === "Male" && theDay === 1){
        name1.innerText = "Your Akan name is " + " " + mmale[1];
    }else if(gender === "Male" && theDay === 2){
        name1.innerText = "Your Akan name is" + " " + mmale[2];
    }else if(gender === "Male" && theDay === 3){
        name1.innerText = "Your Akan name is" + " " + mmale[3];  
    }else if(gender === "Male" && theDay === 4){
        name1.innerText = "Your Akan name is" + " " + mmale[4];  
    }else if(gender === "Male" && theDay === 5){
        name1.innerText = "Your Akan name is" + " " + mmale[5];  
    }else if(gender === "Male" && theDay === 6){
        name1.innerText = "Your Akan name is" + " " + mmale[6];  
    }else if(gender === "Female" && theDay === 0){
        name1.innerText = "Your Akan name is" + " " + ffemale[0];  
    }else if(gender === "Female" && theDay === 1){
        name1.innerText = "Your Akan name is" + " " + ffemale[1];
    }else if(gender === "Female" && theDay === 2){
        name1.innerText = "Your Akan name is" + " " + ffemale[2];
    }else if(gender === "Female" && theDay === 3){
        name1.innerText = "Your Akan name is" + " " + ffemale[3];
    }else if(gender === "Female" && theDay === 4){
        name1.innerText = "Your Akan name is" + " " + ffemale[4];
    }else if(gender === "Female" && theDay === 5){
        name1.innerText = "Your Akan name is" + " " + ffemale[5];
    }else if(gender === "Female" && theDay === 6){
        name1.innerText = "Your Akan name is" + " " + ffemale[6];
    }
}

