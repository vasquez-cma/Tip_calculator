let billInput = document.getElementById("billInput");
let tipPerson = document.getElementById("tip-amount-person");
let tipTotal  = document.getElementById("tip-amount-total");
let numberPeople  = document.getElementById("people-number");
let buttonTip5 = document.getElementById("button-tip-5");
let buttonTip10 = document.getElementById("button-tip-10");
let buttonTip15 = document.getElementById("button-tip-15");
let buttonTip25 = document.getElementById("button-tip-25");
let buttonTip50 = document.getElementById("button-tip-50");
let form = document.getElementById("form");

buttonTip5.addEventListener('click', () =>{

   if(billInput.value == "" || numberPeople.value == ""){
     alert("You have not put all the information");
   }else if(!billInput.value == "" && !numberPeople == ""){
    let tipPerPerson = billInput.value * 5 / 100;
    let totalTip = numberPeople.value * tipPerPerson;
    
    tipPerson.textContent = "$ " + tipPerPerson; 
    tipTotal.textContent = "$ " + totalTip;
   }
   
})

buttonTip10.addEventListener('click', () =>{

    if(billInput.value == "" || numberPeople.value == ""){
      alert("You have not put all the information");
    }else if(!billInput.value == "" && !numberPeople == ""){
     let tipPerPerson = billInput.value * 10 / 100;
     let totalTip = numberPeople.value * tipPerPerson;
     
     tipPerson.textContent = "$ " + tipPerPerson; 
     tipTotal.textContent = "$ " + totalTip;
    }
    
 })

 buttonTip15.addEventListener('click', () =>{

    if(billInput.value == "" || numberPeople.value == ""){
      alert("You have not put all the information");
    }else if(!billInput.value == "" && !numberPeople == ""){
     let tipPerPerson = billInput.value * 15 / 100;
     let totalTip = numberPeople.value * tipPerPerson;
     
     tipPerson.textContent = "$ " + tipPerPerson; 
     tipTotal.textContent = "$ " + totalTip;
    }
    
 })

 buttonTip25.addEventListener('click', () =>{

    if(billInput.value == "" || numberPeople.value == ""){
      alert("You have not put all the information");
    }else if(!billInput.value == "" && !numberPeople == ""){
     let tipPerPerson = billInput.value * 25 / 100;
     let totalTip = numberPeople.value * tipPerPerson;
     
     tipPerson.textContent = "$ " + tipPerPerson; 
     tipTotal.textContent = "$ " + totalTip;
    }
    
 })

 buttonTip50.addEventListener('click', () =>{

    if(billInput.value == "" || numberPeople.value == ""){
      alert("You have not put all the information");
    }else if(!billInput.value == "" && !numberPeople == ""){
     let tipPerPerson = billInput.value * 50 / 100;
     let totalTip = numberPeople.value * tipPerPerson;
     
     tipPerson.textContent = "$ " + tipPerPerson; 
     tipTotal.textContent = "$ " + totalTip;
    }
    
 })


function resetPage () {
    window.location.reload();
}