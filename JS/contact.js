document.addEventListener('DOMContentLoaded', () => {
    document.getElementById(contact-form).addEventListener('submit', function(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application.json'
            }
        }).then(response => {
            if (response.ok) {
                alert('Thank you for your message! I will be in touch soon.');
                form.reset();
            } else {
                alert('Oops! There was a problem submitting your form. :(');
            }
        }).catch(error => {
            alert('Oops! There was a problem submitting your form. :(');
        });
    });
})