document.addEventListener("DOMContentLoaded", function() {
    // Handle trip type selection
    document.querySelectorAll('input[name="tripType"]').forEach(input => {
        input.addEventListener('change', function() {
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
        button.addEventListener('click', function() {
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
});