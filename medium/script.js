let question = prompt("What's your favourite month? use a number.");

let  months = ["","January", "February", "March", "April", "May", 
"June", "July", "August", "September", "October", "November", "December"];

let anwser = parseInt(question);

if (anwser >= 1 && anwser <= 12) {
  console.log(months[anwser]); 
} else {
 
  console.log("The number does not have a corresponding month.");
}

// function checkMonth() {
    
//     if (months <= 12){
//         console.log(`You picked ${months[question]}`);
//     }
//     else (months > 12) 
//         console.log(`The number does not have a corresponding month.`)
// }