
let selling_price = 45; //price perlitre
let shedsName = ["A", "B", "C", "D"];
let shedsProduction = [510, 308, 486, 572];


let time;
let week = 7;
let totalLitres = 0;
let year = 365;

let totalProduction = function(){
    for (let i = 0; i < shedsProduction.length; i++){
        totalLitres = totalLitres + shedsProduction[i];
        console.log("Your production in Shed " +  shedsName[i] + " is " + shedsProduction[i] + " litres per day \n")
    }
   alert("The total production is " + totalLitres + " litres per day\n");
    return totalLitres;
}
totalProduction();

let months = {January: 31, February: 29, March: 31, April: 30, May: 31, June: 30, July: 31, August: 31, September: 30, October: 31, November: 30, December: 31}

let incomeOverTime = function income(selling_price, time){
    let weeklyTotal = 1;
    let yearlyTotal = 1;
    weeklyTotal = week * selling_price * totalLitres;
    yearlyTotal = year * selling_price * totalLitres;
    
    alert("Your weekly income will be Ksh " + weeklyTotal);
    alert("Your yearly income will be Ksh " + yearlyTotal);

    for (const [key, value] of Object.entries(months)) {
        alert("Your income for " + key + " is " + value * totalLitres * selling_price);
      }
}

incomeOverTime(selling_price, time);