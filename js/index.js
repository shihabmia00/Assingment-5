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

document.getElementById('donate-btn1').addEventListener('click', function () {
    // get values and innertext
    const donateinput1 = addedValueShow('donate-balance-amount1')
    const donatebalance = getInnerTextValue('donate-balance1')
    const mainBalance = getInnerTextValue('main-balance')
    // if condition
    if (donatebalance > 0) {
        const newBalance = donatebalance + donateinput1
        document.getElementById('donate-balance1').innerText = newBalance
        const finalUpdate = mainBalance - donateinput1
        document.getElementById('main-balance').innerText = finalUpdate
        document.getElementById('modal').classList.remove('hidden')
        

        if (donateinput1 <= 0 ) {
            alert('Wrong Amount please try again')
        }
      
    }

    else {
        alert('Wrong Amount please try again error')
    }


})

// Modal Close Function
let popup = document.getElementById('modal')
function closePopup (){
    popup.classList.add('hidden')
}


