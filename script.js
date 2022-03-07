


let gender = (document.getElementById)("gender").value;
let bday = parseInt(document.getElementById("day").value);


let mmale = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let ffemale = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

// console.log("Script Logged")

// let dayOfWeek = ( ( (19/4) -2*19-1) + ((5*96/4) ) + ((26*(12+1)/10)) + 12 ), mod 7;
// console.log(dayOfWeek);

// function akan(){
//     if (day < 1 || > 31){
//         name.innerHTML = "Please enter a valid day";
//     }else if(month < 1 || > 12){
//         name.innerHTML = "Please enter a valid month";
//     }else{
//         if(gender === "Male" && dayOfWeek === "sunday"){
//             name.innerHTML = "Your akan name is" + " " + ${mmale[0]};
//         }else if(gender === "Male" && dayOfWeek === "monday"){ 
//             name.innerHTML = "Your akan name is" + " " + ${mmale[1]};           
//         }
//     }    
    
// }


// function submitForm(){
//     console.log(name)
//     console.log("Button Clicked");
//     name.innerText = "clicked";
//     akan()
// }

var A = new Date('October 20, 1996');
var Day = A.getDay();
document.write("Number of Day: " + Day);
