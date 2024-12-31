const survey = new Survey.Model(json);

// Define the API base URL dynamically (e.g., from environment variables or a configuration)
const apiBaseUrl = window.location.origin; // Use the current origin as the base URL
const submitEndpoint = '/submit-survey'; // Endpoint for survey submission

survey.onComplete.add((sender, options) => {
    const surveyData = sender.data;

    // Construct the full API URL dynamically
    const apiUrl = `${apiBaseUrl}${submitEndpoint}`;

    // Send survey data to the server
    fetch(apiUrl, {
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
