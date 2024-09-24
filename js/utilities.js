function addedValueShow (id){
    const value = document.getElementById(id).value
    const number2 = parseFloat(value)
    return number2; 
}

function getInnerTextValue(id){
    const values = document.getElementById(id).innerText
    const number = parseFloat(values)
    return number;
}



// Modal Close Function
let popup = document.getElementById('modal')
function closePopup (){
    popup.classList.add('hidden')
}

// Donation btn show / hide 
