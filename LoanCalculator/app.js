/*jslint es6 */
'use strict';
const $form = document.querySelector('#form');


// submit form and calculate the payments and interest
// $form.addEventListener('submit', calculate);
$form.addEventListener('submit', function (e) {
    //hide result
    document.getElementById('result').style.display = 'none';
    //Show loader immediately
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculate, 2000);
    e.preventDefault();
});

function calculate(e) {
    // ui elements
    const $amount = document.querySelector('#amount');
    const $interest = document.querySelector('#interest');
    const $yeas = document.querySelector('#years');


    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');


    const principal = parseFloat($amount.value); //convert string to numbers
    const calculatedInterest = parseFloat($interest.value) / 100 / 12;
    const calculatePayments = parseFloat($yeas.value) * 12;
    console.log(`this is the ${principal}  calculate interes${calculatedInterest}`);
    //calculate monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatePayments);
    console.log(x);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    if (isFinite(monthly)) {

        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatePayments).toFixed(2);
        totalInterest.value = ((monthly * calculatePayments) - principal).toFixed(2);
        //hide spiner
        document.getElementById('loading').style.display = 'none';
        //show results
        document.getElementById('result').style.display = 'block';
    } else {
        showError('Please check your number');
    }
    $amount.value = '';
    $interest.value = '';
    $yeas.value = '';
    // e.preventDefault();
}


// show error
function showError(error) {
    //hide result
    document.getElementById('result').style.display = 'none';
    //Show loader immediately
    document.getElementById('loading').style.display = 'none';


    const errorDiv = document.createElement('div');
    //get elements
    const card = document.querySelector('.card');
    const h2 = document.querySelector('.heading');

    errorDiv.className = 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode(error));
    //insert before the heading;
    card.insertBefore(errorDiv, h2);
    //clear error 
    setTimeout(clearError, 2000);
}

// clear Error function
function clearError() {
    document.querySelector('.alert').remove();
}