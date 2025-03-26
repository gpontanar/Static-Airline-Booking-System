document.addEventListener("DOMContentLoaded", function () {
    // Handle trip type selection
    document.querySelectorAll('input[name="tripType"]').forEach(input => {
        input.addEventListener('change', function () {
            const returnDateInput = document.getElementById('returnDate');
            if (this.value === 'roundTrip') {
                returnDateInput.removeAttribute('disabled');
            } else {
                returnDateInput.setAttribute('disabled', 'disabled');
            }
        });
    });

    // Booking tabs functionality
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons and content
            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            // Add active class to clicked button
            this.classList.add('active');

            // Show the corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Toggle password visibility
    document.getElementById('togglePassword').addEventListener('click', function () {
        const passwordInput = document.getElementById('loginPassword');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });

    // Enable/disable sign-up button based on form validation
    const registerForm = document.getElementById('registerForm');
    const signUpButton = document.getElementById('signUpButton');

    registerForm.addEventListener('input', function () {
        const isValid = registerForm.checkValidity();
        signUpButton.disabled = !isValid;
    });

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!registerForm.checkValidity()) {
            event.stopPropagation();
            registerForm.classList.add('was-validated');
        } else {
            // Handle successful form submission
        }
    });

    // Handle flight selection
    const selectButtons = document.querySelectorAll(".select-flight");

    selectButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Check if user is logged in
            const isLoggedIn = false; // Replace with actual login check
            if (isLoggedIn) {
                window.location.href = "checkout.html"; // Redirect to checkout page
            } else {
                window.location.href = "login.html"; // Redirect to login page
            }
        });
    });

    // Handle Search Flights button redirection
    const searchButton = document.querySelector('.search-btn');
    if (searchButton) {
        searchButton.addEventListener('click', function () {
            const departure = document.getElementById('departure').value;
            const destination = document.getElementById('destination').value;
            const departDate = document.getElementById('departDate').value;
            const returnDate = document.getElementById('returnDate') ? document.getElementById('returnDate').value : null;
            const passengers = document.getElementById('passengers').value;
            const cabinClass = document.getElementById('cabinClass').value;

            // Validate form inputs
            if (!departure || !destination || !departDate || !passengers || !cabinClass) {
                alert('Please fill in all required fields.');
                return;
            }

            // Redirect to flight-results.html
            window.location.href = 'flight-results.html';
        });
    }
});