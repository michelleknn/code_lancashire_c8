window.addEventListener('load', function(event){
    printText()
    printInputText()
    sendContactDetails()
})
    //load = event'; printText()= calls the function we need

function printText(){
    const button = document.getElementById('click-btn') //finds the button with that id 
    button.addEventListener('click', () => { // click = event (i.e., when said button is clicked, run the arrow function below)
        //adding function code within an ARROW function
        //const h1 = document.getElementById('title')
        const login = document.getElementById('login') //you need to define this in the HTML (<h1 id="name"></h1>)
        const name = document.getElementById('name')
        const website = document.getElementById('website')
        //h1.innerHTML = "<p>hello world</p>"
        // .innerHTML prints without the HTML tags (e.g., <p></p>) 
        // so it would print "hellow world", rather than 
            // <p>hello world</p>
        // .innerText prints WITH the html tags
        fetch("https://api.github.com/users/michelleknn")
        .then((response) => response.json())
        .then((data) =>{
            console.log("recieved data", data)
            login.innerHTML = data.login
            name.innerHTML = data.name
            company.innerHTML = data.company
        })
            //fetch = fetching what we need from that website. it will wait for the server to respond 
            //function.function = chaining function (happens in sequence, not simultanously)
            //info is sent in the lightest weight - likely JSON string 
    })
}
    //button = variable; document = the html file; 
    //click-btn = the id used for the element in the html file 

    //this code uses an ARROW function () => {code here} rather then a 
    //NORMAL function = function example() {code here} 
        //the difference between them is ARROW is shorter and inherits their
        //this from their parent scope unlike NORMAL function which specifies
        //their own. 

//eventlisteners will ONLY run if said event happens. 

function printInputText() 
{
    const fnInput = document.getElementById('fn-input')
    const spanText = document.getElementById('input-text')

    fnInput.addEventListener('input', (event) =>{
        const inputValue = fnInput.value
        spanText.innerHTML = inputValue
    })
}

function sendContactDetails()
{
    const form = document.getElementById('contact-form')
    form.addEventListener('submit', (event)=>{ //submit = the event its listening for (for forms, submit is always the event)
        event.preventDefault() //This line prevents it from redirecting you to the site the info is sent to? 

        const formData = new FormData(form)

        const data = Object.fromEntries(formData.entries()) //i believe this sends ONLY the entries of the form (e.g., email: mic0722@outlook.com)

        console.log("formData", data)
    })
}

//there MUST be a NAME attribute in each thing on the form for this to work
