window.addEventListener('load', function(event){
    printText()
    sendContactDetails()
})
    //load = event'; printText()= calls the function we need


    function sendContactDetails()
    {
        const form = document.getElementById('contact-form')
        form.addEventListener('submit', (event)=>{ //submit = the event its listening for (for forms, submit is always the event)
            event.preventDefault() //This line prevents it redirecting you to the site the info is sent to? 
    
            const formData = new FormData(form)
    
            const data = Object.fromEntries(formData.entries()) //i believe this sends ONLY the entries of the form (e.g., email: mic0722@outlook.com)
    
            console.log("formData", data)
        })
    }

function printText(){
    const form = document.getElementById('contact-form')
    const button = document.getElementById('send-btn') //finds the button with that id 
    const full_name = document.getElementsByClassName('full_name')
    const email = document.getElementsByClassName('email')
    const message = document.getElementsByClassName('message')
    button.addEventListener('click', () => { 
            if(full_name && email && message) {
                const successMessage = document.createElement('p');
                successMessage.textContent = "Contact form successfully submitted";
                document.body.appendChild(successMessage);
                form.reset();} //clears form when submit button is clicked
            //couldnt get this part of the logic to work 
                //else{   
                //    const missingMessage = document.createElement('p');
                //    missingMessage.textContent = "Please fill in all required fields";
                //   document.body.appendChild(missingMessage);}
        //adding function code within an ARROW function
    
        })
    }


//add if statement within the arrow function and add 'return' to stop the flow of the code

