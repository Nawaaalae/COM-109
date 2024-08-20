
// Contact Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm'); 
    const successMessage = document.getElementById('successMessage');
    const finalMessage = document.getElementById('final');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            if (validateForm()) {
                // Save form data to cookies
                const name = document.getElementById('uniqueID');
                const email = document.getElementById('uniqueID2');
                const message = document.getElementById('uniqueID3');
                
                setCookie('name', name, 7); 
                setCookie('email', email, 7);
                setCookie('message', message, 7);
                
                displaySuccessMessage('Form submitted successfully!');
                form.reset(); 
				nameError.innerText=""
            }
        });
    } else {
        nameError.innerText="Form with id 'contactForm' not found."
    }

    function validateForm() {
        const name = document.getElementById('uniqueID');
        const email = document.getElementById('uniqueID2');
        const message = document.getElementById('uniqueID3');
		const nameError = document.getElementById('nameError');
		nameError.innerText=""
       
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(name.value)) {
            nameError.innerText='Your name should contain only letters. Please remove any numbers or special characters.';
			
            return false;
        }

        if (!isValidEmail(email.value)) {
           nameError.innerText='Please enter a valid email address.';
            return false;
        }

        if (message.value === '') {
            nameError.innerText='Please enter a message.';
            return false;
        }
	nameError.innerText="sucesss"
        return true;
    }
 // Validation for Email Regex
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displaySuccessMessage(message) {
        finalMessage.textContent = message;
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    }

   
    // Show cookie usage alert for User acknowledgement
    showCookieAlert();

    function showCookieAlert() {
        const cookieConsent = getCookie('cookieConsent');
        if (!cookieConsent) {
            alert('This site uses cookies to enhance your browsing experience.');
            setCookie('cookieConsent', 'true', 7); 
        }
    }



        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');

        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
		
		
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`; 
}

// Function to get a cookie by name from contact form
function getCookie(name) {
    const nameEQ = `${name}=`;
    const cookiesArray = document.cookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

});