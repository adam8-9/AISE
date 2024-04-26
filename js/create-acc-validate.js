let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let submit_btn = document.querySelector('.create-acc-btn')

//above are the elements we grab from our HTML document with the use of querySelector

let error = document.querySelectorAll('.error')
// error is all the elements that have the class of error which we grab with querySelectorAll which stores it in a list for us
//which later we can target each of the elements within the array by referncing its index value

let pass_1 = document.querySelector('.pass-1')
let pass_2 = document.querySelector('.pass-2')
let pass_3 = document.querySelector('.pass-3')
//above are the elements we grab from our HTML document wiht the use of querySelector

let passCheck = /^(?=.*[0-9])(?=.*[!@#£$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
let pass_req_1 =  /.*[A-Z]/; // This checks if the password has a uppercase letter
let pass_req_2 = /.*[a-z]/; // This checks if the password has a lowercase letter
let pass_req_3 =  /^(.*[0-9])|(.*[!@#£$%^&*])$/; // This checks if the password has a number or symbol
let pass_req_4 = /^.{8,}$/; // This checks if the password has at least charcters or more


//We are using 'classList' to add and remove classes which we have made previously in the css but hasn't been applied unless
//The appropriate code runs below when the submit button is clicked 
submit_btn.addEventListener('click', (e)=>{
    
e.preventDefault()

let allChecks = [(pass_req_1.test(password.value)&& pass_req_2.test(password.value)),
    pass_req_3.test(password.value),pass_req_4.test(password.value)]


let allValues = [firstName.value !== '' ? true : false,lastName.value !== '' ? true : false,email.value.indexOf('@') === -1 ? false : true, allChecks.indexOf(false) === -1 ? true : false]

if(allValues.indexOf(false)=== -1){
    window.location.href = "../index.html";

}else{
  
if(firstName.value===''){
    error[0].classList.add('error_show') //if it doesn't we give the email error 
}else{
    error[0].classList.remove('error_show')// else we remove it 
}

if(lastName.value===''){
    error[1].classList.add('error_show') //if it doesn't we give the email error 
}else{
    error[1].classList.remove('error_show')// else we remove it 
}

if(email.value.indexOf('@') === -1 || email.value.indexOf('.com') === -1 ){ // we check if '@' or '.com' exists in the email 
    error[2].classList.add('error_show') //if it doesn't we give the email error 
}else{
    error[2].classList.remove('error_show')// else we remove it 
}
//'allChecks' will contain values of true or false depending on whether the password has passed regex test     

if(allChecks.indexOf(false) === -1){
    error[3].classList.remove('error_show')
    // if we find there is no 'false' value in the allChecks array we get a -1 which from using indexOf
}else{
    error[3].classList.add('error_show')
    // if we get 1 from using indexOf that means there is a false value so we show the error message 

    if(password.value.match(pass_req_1) && password.value.match(pass_req_2)){
        pass_1.classList.add('pass-checked')
    }else{
        pass_1.classList.remove('pass-checked')
        //If 'pass_req_1' and 'pass_req_2' are both true then we turn the 1st red message into green to indicate to the user
        //that their password passes the 1st requirement 
    }

    if(password.value.match(pass_req_3)){
        pass_2.classList.add('pass-checked')

    }else{
        pass_2.classList.remove('pass-checked')
        //If 'pass_req_3 is true then we turn the 2nd red message into green to indicate to the user
        //that their password passes the 2nd requirement 
    }

    if(password.value.match(pass_req_4)){
        pass_3.classList.add('pass-checked')

    }else{
        pass_3.classList.remove('pass-checked')
            //If 'pass_req_4 is true then we turn the 3rd red message into green to indicate to the user
        //that their password passes the 3rd requirement 

    }
}

}


}

)







// values
// attributes
// tags
