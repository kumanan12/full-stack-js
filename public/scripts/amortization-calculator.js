//A = P * ( r(1+r) ^n/ (1=r)^n-1

// monthly EMI
// P - Principal amount
// R - interest rate in years
// N - number of years
function calculateAmountPerPeriod(P, R, N) {        
    let r = (R/100)/12; 
    let n = N*12;
    console.log(`r is ${r}, n is ${n} and P is ${P}`);
     let numerator = r * Math.pow((1+r),n);
     let denominator = Math.pow((1+r),n) -1;
     let amount = P * (numerator/denominator);
     console.log(`amount is ${amount}`);
     return amount;   
}



var P = 20000;
var R= 7.5;
var N = 5;


function calculate() {
    var P = document.getElementById("P").value;
    var R= document.getElementById("R").value;
    var N = document.getElementById("N").value;
    var finalAmount = document.getElementById("finalAmount");
    var amoutPerPeriod = calculateAmountPerPeriod(P, R, N);
    finalAmount.innerText = amoutPerPeriod.toFixed(2);
}

function validateAllrequiredFields(){
    var P = document.getElementById("P").value;
    var R= document.getElementById("R").value;
    var N = document.getElementById("N").value;
    var calculateBtn = document.getElementById("calculateBtn");
    var isAllFieldsEmpty = P === "" && R === "" && N === "";
    if (!isAllFieldsEmpty){
        calculateBtn.removeAttribute("disabled");
    }
}