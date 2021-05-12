function register(){

//getting inputs
const register_btn = document.getElementById('register-btn')
const input_username = document.getElementById('username')
const input_password = document.getElementById('password')
const input_confirm = document.getElementById('confirm-password')
const input_fullname = document.getElementById('fullname')
const gender_btn = document.getElementsByName('gender')
const input_email = document.getElementById('email')
const input_age = document.getElementById('age')
const term_check = document.getElementById('term')

    //bersihkan warning
    let warnings = document.querySelectorAll('.warning')
    warnings.forEach((e)=>{
        e.replaceWith()
    })

    //to determine wheter the input all inputs are success
    let success = true
    
    //username
    if(input_username.value == ""){
        const w = document.createElement('div')
        w.innerHTML = 'username must be filled'
        w.classList.add('warning')
        input_username.parentElement.appendChild(w)
        success = false
    }
    else if(input_username.value.length < 5){
        const w = document.createElement('div')
        w.innerHTML = 'username must be at least 5 character'
        w.classList.add('warning')
        input_username.parentElement.appendChild(w)
        success = false
    }

    //password
    if(input_password.value == ""){
        const w = document.createElement('div')
        w.innerHTML = 'password cannot be empty'
        w.classList.add('warning')
        input_password.parentElement.appendChild(w)
        success = false
    }
    else if(input_password.value.length < 8){
        const w = document.createElement('div')
        w.innerHTML = 'password length must be atleast 8 character'
        w.classList.add('warning')
        input_password.parentElement.appendChild(w)       
        success = false
    }
    else{
        //must be 8 character, number, character, uppercase, lowercase
        let low = 0, up = 0, num  = 0, sym =  0
        for(let i=0; i<input_password.value.length; i++){
            if(input_password.value[i] >= 'A' && input_password.value[i] <= 'Z'){
                up += 1
            }
            else if(input_password.value[i] >= 'a' && input_password.value[i] <= 'z'){
                low +=  1
            }
            else if(input_password.value[i] >= '0' && input_password.value[i] <= '9'){
                num += 1
            }
            else{
                sym += 1
            }
        }
        
        if(low === 0 || up === 0 || num === 0 || sym === 0){
            const w = document.createElement('div')
            w.innerHTML = 'password must contain lower case, uppercase letter, number, and symbol'
            w.classList.add('warning')
            input_password.parentElement.appendChild(w)   
            success = false
        }
    }


    //confirm password
    if(input_confirm.value == ""){
        const w = document.createElement('div')
        w.innerHTML = 'confirm password must be filled'
        w.classList.add('warning')
        input_confirm.parentElement.appendChild(w) 
        success = false
    }
    else if(input_password.value != input_confirm.value){
        const w = document.createElement('div')
        w.innerHTML = 'must match with your password'
        w.classList.add('warning')
        input_confirm.parentElement.appendChild(w) 
        success = false
    }


    //name
    if(input_fullname.value == ""){
        const w = document.createElement('div')
        w.innerHTML = 'name must be filled'
        w.classList.add('warning')
        input_fullname.parentElement.appendChild(w)        
        success = false
    }
    else if(input_fullname < 4){
        const w = document.createElement('div')
        w.innerHTML = 'name length must be more than 4 characters'
        w.classList.add('warning')
        input_fullname.parentElement.appendChild(w)   
        success = false 
    }

    //gender
    if(gender_btn[0].checked == false && gender_btn[1].checked == false){
        const w = document.createElement('div')
        w.innerHTML = 'gender must be choosed'
        w.classList.add('warning')
        gender_btn[0].parentElement.parentElement.parentElement.appendChild(w)
        success = false
    }

    //email
    if(input_email.value == ""){
        const w = document.createElement('div')
        w.innerHTML = 'Email must be filled'
        w.classList.add('warning')
        input_email.parentElement.appendChild(w)
        success = false
    }
    else{
        //check email format
        let email = input_email.value
        let valid_email = true
        let countAD = 0, countDot = 0

        for(let i = 0; i < email.length; i++){
            if(email[i] == '@') countAD += 1
            else if(email[i] == '.') countDot += 1
        }

        //start with character
        if((email[0] >= 'A' && email[0] <= 'Z') || (email[0] >= 'a' && email[0] <= 'z')
        ){
            
        }
        else{
            valid_email = false
        }

        if((email[email.length-1] >= 'A' && email[email.length-1] <= 'Z') || (email[email.length-1] >= 'a' && email[email.length-1] <= 'z')
        ){

        }
        else{
            valid_email = false
        }

        if(valid_email == false || countAD  == 0 || countDot == 0){
            const w = document.createElement('div')
            w.innerHTML = 'must be a valid email'
            w.classList.add('warning')
            input_email.parentElement.appendChild(w)
            success = false
        }
    }

    //age
    if(input_age.value == ""){
        const w = document.createElement('div')
        w.innerHTML = 'Age must be filled'
        w.classList.add('warning')
        input_age.parentElement.appendChild(w)
    }
    else if(input_age.value < 17){
        const w = document.createElement('div')
        w.innerHTML = 'Age must be atleast 17'
        w.classList.add('warning')
        input_age.parentElement.appendChild(w)
    }

    //term and conditions
    if(term_check.checked == false){
        const w = document.createElement('div')
        w.innerHTML = 'must be aggree with term and conditions'
        w.classList.add('warning')
        term_check.parentElement.parentElement.appendChild(w)
        success = false
    }


    //klu dia ada salah
    return success
    //klu dia set true ntar keload
}




