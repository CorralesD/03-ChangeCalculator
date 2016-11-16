

var cost = document.getElementById('totalAmountOfTheSale');

var amountGiven = document.getElementById('amountTenderedByTheCustomer');

var button = document.getElementById('calculateChange');

var currencies = [
    { dollar: 'hundreds', worth: 100 },
    { dollar: 'fifties', worth: 50 },
    { dollar: 'twenties', worth: 20 },
    { dollar: 'tens', worth: 10 },
    { dollar: 'fives', worth: 5 },
    { dollar: 'ones', worth: 1 },
    { dollar: 'quarters', worth: .25 },
    { dollar: 'dimes', worth: .10 },
    { dollar: 'nickels', worth: .05 },
    { dollar: 'pennies', worth: .01 },
]

// button

button.onclick = function() {

    var changeDue = (amountGiven.value - cost.value);

    changeDue = Math.round(changeDue * 100) / 100;

    var message = 'your change is ' + '$' + changeDue + '!';

    var output = document.getElementById('output');

    output.innerHTML = "<div class='animated zoomIn'>" + message + "</div>";

    // debugger;

// 

    for(var i = 0; i < currencies.length; i++) {

    	var currency = currencies[i];

    	var bill = parseInt(changeDue / currency.worth);

    	changeDue -= bill * currency.worth;
    	changeDue = Math.round(changeDue * 100) / 100;

        document.getElementById(currency.dollar).innerHTML = "<div class='animated flipInX'>" + bill + "</div>";


    	}

    }

