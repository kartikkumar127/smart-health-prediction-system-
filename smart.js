document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate successful login
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.symptom-input').style.display = 'block';
});

document.getElementById('predictButton').addEventListener('click', function() {
    const symptoms = document.getElementById('symptoms').value;
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ symptoms: symptoms })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('predictionResult').innerText = `Predicted Disease: ${data.prediction}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
