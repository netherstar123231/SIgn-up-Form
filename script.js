window.document.addEventListener("DOMContentLoaded" , ()=>{

        let input = document.querySelectorAll("input");
        let label = document.querySelectorAll("label");
        let index = input.length;
        let first = document.getElementById("first");
        let last = document.getElementById("last");
        let email = document.getElementById("email");
        let number = document.getElementById("number");
        let password = document.getElementById("password");
        let confirmPassword = document.getElementById("confirm-password");
        let form = document.querySelector("form");
        let firstError = first.nextElementSibling;
        let lastError = last.nextElementSibling;
        let passwordError = password.nextElementSibling;
        let numberError = number.nextElementSibling;


        

        const numPattern = /[0-9]{4}\-[0-9]{3}\-[0-9]{4}$/;
        const name = /^[a-zA-Z]+/;

        confirmPassword.disabled = true;
        

        number.addEventListener("input" ,()=>{
                
            if(numPattern.test(number.value)){
                number.style.borderColor ="green";
            }
            else if(!numPattern.test(number.value)){
                number.style.borderColor ="red";
            }
        });

        first.addEventListener("input" ,()=>{
                
            if(name.test(first.value)){
                first.style.borderColor ="green";
            }
            else{
                first.style.borderColor ="red";
            }
        });
        
        last.addEventListener("input" ,()=>{
                
            if(name.test(last.value)){
                last.style.borderColor ="green";
            }
            else{
                last.style.borderColor ="red";
            }
        });

        email.addEventListener("input" ,()=>{
                
            if((email.validity.valid === true)){
                email.style.borderColor ="green";
            }
            else{
                email.style.borderColor ="red";
            }
        });

        
        for( let i=0 ;  i < index ; i++){
            input[i].addEventListener("input" ,()=>{
                
                if((input[i].validity.valueMissing === true)){
                        label[i].style.visibility = 'hidden';
                        input[i].style.borderColor ="royalblue";
                }
                if((input[i].validity.valueMissing === false)){
                    label[i].style.visibility = 'visible';
                }

            });
            
            
            
            
            input[i].addEventListener("blur" ,()=>{
                
                if((input[i].validity.valueMissing === true)){
                        label[i].style.visibility = 'hidden';
                        input[i].style.borderColor ="black";
                }
               
            });
            
            input[i].addEventListener("focus" ,()=>{
                
                if((input[i].validity.valueMissing === true)){
                    label[i].style.visibility = 'hidden';
                    input[i].style.borderColor ="royalblue";
                }
               
            })

        }

        password.addEventListener("input" ,()=>{
                
            if(password.validity.valueMissing === true){
                confirmPassword.disabled = true;
            }
            else{
                confirmPassword.disabled = false;
            }
        });

        confirmPassword.addEventListener("input" ,()=>{
                
            if(confirmPassword.value === password.value){
                confirmPassword.style.borderColor ="green";
                password.style.borderColor ="green";
            }
            else{
                confirmPassword.style.borderColor ="red";
                password.style.borderColor ="red";
            }
        });

        form.addEventListener("submit" ,(event) =>{
            event.preventDefault();

            if(!name.test(first.value)){
                firstError.textContent = "*Please put alphabet characters only"
            }
            if(name.test(first.value)){
                firstError.textContent = "";
            }
            if(!name.test(last.value)){
                lastError.textContent = "*Please put alphabet characters only"
            }
            if(name.test(last.value)){
                lastError.textContent = "";
            }
                
            if(confirmPassword.value !== password.value){
                passwordError.textContent = "*Password doest not match"
            }
            
            if(!numPattern.test(number.value)){
                numberError.textContent = "*Please follow the number pattern given"
            }
            if(numPattern.test(number.value)){
                numberError.textContent = ""
            }

         
        })

        
    

})