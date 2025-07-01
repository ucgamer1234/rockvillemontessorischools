document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('admissionForm');
    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Send data to backend (local backend endpoint)
            const response = await fetch('http://localhost:3000/api/admission/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                window.location.href = './submitted.html';
            } else {
                alert('Submission failed. Please try again.');
            }
        });
    }
});