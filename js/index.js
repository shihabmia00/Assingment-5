// All class list easy for copy 
// main-balance
// donation-btn
// history-btn
// modal
// donate-balance1
// donate-balance2
// donate-balance3
// donate-balance-amount1
// donate-balance-amount2
// donate-balance-amount3
// donate-btn1
// donate-btn2
// donate-btn3
// transaction-input


// Card Section 1 Done
function transferMoney() {
    let inputAmount = addedValueShow('donate-balance-amount1');
    let mainBalance = getInnerTextValue('main-balance')
    let donateBalance = getInnerTextValue('donate-balance1')
    // if condition is here 
    if (inputAmount > 0 && inputAmount <= mainBalance) {
        let plus = donateBalance + inputAmount
        let minus = mainBalance - inputAmount
        // Update the UI 
        document.getElementById('main-balance').innerText = minus
        document.getElementById('donate-balance1').innerText = plus
        //  Show the Modal
        document.getElementById('modal').classList.remove('hidden')
    }
    else {
        alert('Invalid amount or insufficient balance')
    }
}

// Close the modal
function closeModal() {
    document.getElementById('modal').classList.add('hidden')
}

// Card Section 2 Done
function transferMoneyTwo() {
    let inputAmountTwo = addedValueShow('donate-balance-amount2');
    let mainBalanceTwo = getInnerTextValue('main-balance')
    let donateBalanceTwo = getInnerTextValue('donate-balance2')
    // if condition is here 
    if (inputAmountTwo > 0 && inputAmountTwo <= mainBalanceTwo) {
        let plusTwo = donateBalanceTwo + inputAmountTwo
        let minusTwo = mainBalanceTwo - inputAmountTwo
        // Update the UI 
        document.getElementById('main-balance').innerText = minusTwo
        document.getElementById('donate-balance2').innerText = plusTwo
        //  Show the Modal
        document.getElementById('modal').classList.remove('hidden')
    }
    else {
        alert('Invalid amount or insufficient balance')
    }
}


// // Card Section 3 Done
function transferMoneyThree() {
    let inputAmountThree = addedValueShow('donate-balance-amount3');
    let mainBalanceThree = getInnerTextValue('main-balance')
    let donateBalanceThree = getInnerTextValue('donate-balance3')
    // if condition is here 
    if (inputAmountThree > 0 && inputAmountThree <= mainBalanceThree) {
        let plusThree = donateBalanceThree + inputAmountThree
        let minusThree = mainBalanceThree - inputAmountThree
        // Update the UI 
        document.getElementById('main-balance').innerText = minusThree
        document.getElementById('donate-balance3').innerText = plusThree
        //  Show the Modal
        document.getElementById('modal').classList.remove('hidden')
    }
    else {
        alert('Invalid amount or insufficient balance')
    }
}

