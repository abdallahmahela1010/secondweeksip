


let gender = (document.getElementById)("gender").value;
let bday = (document.getElementById("day").value);
let bday1 = "12/10/1996"


  let dateOfBirth = new Date(bday1);  
  let theDay = dateOfBirth.getDay(); 
  document.write("Number of Day: "+theDay);
  name1.innerText = ("Number:" + theDay) ;
  console.log(theDay);


let mmale = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let ffemale = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]



function akan(){
    if(gender === "Male" && theDay === 0  ){
        name1.innerText = mmale[0];
    }else if(gender === "Male" && theDay === 1){
        name1.innerText = mmale[1];
    }else if(gender === "Male" && theDay === 2){
        name1.innerText = mmale[2];
    }
}

function submitForm(){

    akan();
}


