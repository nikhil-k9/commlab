let scrollContainer = document.querySelector('.gallery');
let backBtn = document.getElementById('backBtn');
let forwardBtn = document.getElementById('nextBtn');

scrollContainer.addEventListener('wheel', (evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener('click', (evt)=>{
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft += scrollContainer.clientWidth;
});

backBtn.addEventListener('click', (evt)=>{
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft -= scrollContainer.clientWidth;
});


function formSubmit(e){
    // e.preventDefault();
    let fname = document.getElementById('firstName').value;
    let lname = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let jobTitle = document.getElementById('jobTitle').value;
    let otherJobTitle = document.getElementById('otherJobTitle').value;
    let trainingRequirements = document.getElementById('trainingRequirements').value;
    let message = document.getElementById('hsContext').value;
    let check = document.getElementById('check').checked;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


    if(fname === "" ){
        document.getElementById('firstName').focus();
        document.getElementById('firstName').style.border = "1px solid red";
        document.getElementById('firstName').style.outline = "none";
        document.getElementById('firstNameRequired').innerHTML = "Please enter your first name";
        return false;
    }
    if(lname === ""){
        document.getElementById('lastName').focus();
        document.getElementById('lastName').style.border = "1px solid red";
        document.getElementById('lastName').style.outline = "none";
        document.getElementById('lastNameRequired').innerHTML = "Please enter your last name";
        return false;
    }
    if(email === "" || !emailPattern.test(email)){

        document.getElementById('email').focus();
        document.getElementById('email').style.border = "1px solid red";
        document.getElementById('email').style.outline = "none";
        document.getElementById('emailRequired').innerHTML = "Please enter a valid email";
        return false;
    }

    if(phoneNumber === "" || phoneNumber.length < 10 || phoneNumber.length > 10 || isNaN(phoneNumber)){
        document.getElementById('phoneNumber').focus();
        document.getElementById('phoneNumber').style.border = "1px solid red";
        document.getElementById('phoneNumber').style.outline = "none";
        document.getElementById('phoneNumberRequired').innerHTML = "Please enter your 10 digit phone number";
        return false;
    }
    if(jobTitle === "none"){
        document.getElementById('jobTitle').focus();
        document.getElementById('jobTitle').style.border = "1px solid red";
        document.getElementById('jobTitle').style.outline = "none";
        document.getElementById('jobTitleRequired').innerHTML = "Please enter your job title";
        return false;
    }


    else{
        window.alert("Thank you for your submission");
        return true;
    }
}