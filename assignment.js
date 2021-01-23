function kilometerToMeter(KM) {
    var meter = KM * 1000;
    var distance = meter + "m";
    return distance;
   }


function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var totalBudget = watchPrice + mobilePrice + laptopPrice;
    return totalBudget;
}



function hotelCost(daySpent) {
    finalBill = 0;
    if ( daySpent <= 10) {
        finalBill = daySpent * 100;
    } else if ( daySpent <=20) {
        var firstTendaysbill = 10 * 100;
        var remainingdays = daySpent - 10;
        var billElevenToTweentyDays = remainingdays * 80;
        finalBill = firstTendaysbill + billElevenToTweentyDays;}
    else{
        var firstTendaysbill = 10 * 100;
        var billElevenToTweentyDays = 10 * 80;
        var remainingdays = daySpent - 20;
        var billsForaboveTweentyDay = remainingdays * 50 ;
        finalBill = firstTendaysbill + billElevenToTweentyDays + billsForaboveTweentyDay;
    }
    return finalBill;
}




function megaFriend(array) {
    var largestName = "";
    for (var i = 0; i < array.length; i++) {
         var nameList = array[i];
    if ( nameList.length > largestName.length) {
            largestName = nameList;
        }
    else if(nameList.length == largestName.length) {
             largestName = largestName;}
     
        }return largestName;
         } 
        
        