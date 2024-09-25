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
       
        // Clear the input field
        document.getElementById('donate-balance-amount1').value = ''
       
        // Add the transaction to the history
        let transactionList = document.getElementById('transaction-input');
        let listItem = document.createElement('p');
       
        // Show date and time
        let specificDate = new Date('2024-09-25T10:30:00'); 
        listItem.textContent = `Donate for Flood at Noakhali, Bangladesh. Amount: ৳ ${inputAmount.toFixed(2)} ${specificDate} `;
        transactionList.appendChild(listItem);
        listItem.style.backgroundColor = 'gray'
        listItem.style.marginBottom = '8px'
        listItem.style.borderRadius = '9px'
        listItem.style.padding = '12px'
        listItem.style.color = 'white'

        
        
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
       
        // Clear the input field
        document.getElementById('donate-balance-amount2').value = ''

        // Add the transaction to the history
        let transactionList = document.getElementById('transaction-input');
        let listItem = document.createElement('p');
       
        // Show date and time
        let specificDate = new Date('2024-09-25T10:30:00'); 
        listItem.textContent = `Donate for Flood Relief in Feni, Bangladesh. Amount: ৳ ${inputAmountTwo.toFixed(2)} ${specificDate} `;
        transactionList.appendChild(listItem);
        listItem.style.backgroundColor = 'gray'
        listItem.style.marginBottom = '8px'
        listItem.style.borderRadius = '9px'
        listItem.style.padding = '12px'
        listItem.style.color = 'white'
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
      
        // Clear the input field
        document.getElementById('donate-balance-amount3').value = ''

        // Add the transaction to the history
        let transactionList = document.getElementById('transaction-input');
        let listItem = document.createElement('p');
       
        // Show date and time
        let specificDate = new Date('2024-09-25T10:30:00'); 
        listItem.textContent = `Aid for Injured in the Quota Movement. Amount: ৳ ${inputAmountThree.toFixed(2)} ${specificDate} `;
        transactionList.appendChild(listItem);
        listItem.style.backgroundColor = 'gray'
        listItem.style.marginBottom = '8px'
        listItem.style.borderRadius = '9px'
        listItem.style.padding = '12px'
        listItem.style.color = 'white'
    }
    else {
        alert('Invalid amount or insufficient balance')
    }
}

// Donation Button Show
document.getElementById('donation-btn').addEventListener('click', function () {
    let donationBtn = document.getElementById('donation-btn')
    donationBtn.style.backgroundColor = '#B4F461'
    let historyBtn = document.getElementById('history-btn')
    historyBtn.style.backgroundColor = '#E5E7EB'
    document.getElementById('transaction-input').classList.add('hidden')
})


// History
document.getElementById('history-btn').addEventListener('click', function () {
    let historySection = document.getElementById('transaction-input');
    let historyBtn = document.getElementById('history-btn')
    historyBtn.style.backgroundColor = '#B4F461'

    let donationBtn = document.getElementById('donation-btn')
    donationBtn.style.backgroundColor = '#E5E7EB'

    historySection.classList.remove('hidden')

    // hide all section in Donation page 

})

