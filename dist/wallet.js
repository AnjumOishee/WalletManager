function deposit(){ 
    var Deposit = parseInt(document.getElementById('deposit').value);  
    if (document.getElementById('deposit').value.trim() == '' || Deposit<0){  
        alert('Please enter a valid in the input field.'); 
        document.getElementById('deposit').value = '';
        return; 
    } 
    var curr_Amount = parseInt(document.getElementById('CurrentAmount').innerText); 
 
    var total_diposite = parseInt(document.getElementById('DepositAmount').innerText); 
 
    curr_Amount += Deposit; 
    total_diposite += Deposit;  
 
    document.getElementById('CurrentAmount').innerText = curr_Amount; 
    document.getElementById('DepositAmount').innerText = total_diposite; 
    document.getElementById('deposit').value = '';  
}


function withdraw(){ 
    var Withdraw = parseInt(document.getElementById('withdraw').value);  
 
    if (document.getElementById('withdraw').value.trim() == '' || Withdraw<0){   
        alert('Please enter a valid in the input field.');
        document.getElementById('withdraw').value = ''; 
        return; 
    } 
 
    var curr_Amount = parseInt(document.getElementById('CurrentAmount').innerText); 
 
    var total_Withdraw = parseInt(document.getElementById('WithdrawAmount').innerText); 
    if(Withdraw > curr_Amount){ 
            alert('You have not enough money in your Wallet.') 
            document.getElementById('withdraw').value = ''; 
        } 
    else{ 
        curr_Amount -= Withdraw;  
        total_Withdraw += Withdraw;  
        document.getElementById('withdraw').value = '';  
        } 
     
    document.getElementById('CurrentAmount').innerText =curr_Amount; 
    document.getElementById('WithdrawAmount').innerText = total_Withdraw; 
 
}
