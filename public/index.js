const survey = new Survey.Model(json);

survey.onComplete.add((sender, options) => {
    const surveyData = sender.data;

    // Send survey data to the server
    fetch('http://localhost:3000/submit-survey', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(surveyData)
    })
    .then(response => {
        if (response.ok) {
            alert('Survey submitted successfully!');
        } else {
            alert('Failed to submit the survey.');
        }
    })
    .catch(error => {
        console.error('Error submitting survey:', error);
        alert('An error occurred. Please try again.');
    });
});

$("#surveyElement").Survey({ model: survey });
