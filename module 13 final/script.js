document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const results = {};
    for (let i = 1; i <= 10; i++) {
        results[`q${i}`] = document.querySelector(`input[name="q${i}"]:checked`)?.value || 'Not answered';
        document.getElementById(`result${i}`).textContent = results[`q${i}`];
    }
    document.getElementById('results').style.display = 'block';
});
