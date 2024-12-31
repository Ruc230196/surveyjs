const json = {
  "title": "Survey Form",
  "description": "Please fill out the form below",
  "logoPosition": "right",
  "pages": [
    {
      "name": "Section 1",
      "title": "Personal Information",
      "elements": [
        {
          "type": "text",
          "name": "firstname",
          "title": "First Name",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "lastname",
          "title": "Last Name",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "email",
          "title": "Email",
          "isRequired": true,
          "validators": [
            {
              "type": "email",
              "text": "Please enter a valid email address"
            }
          ],
          "inputType": "email"
        },
        {
          "type": "text",
          "name": "phonenumber",
          "title": "Phone Number",
          "inputType": "tel"
        }
      ]
    },
    {
      "name": "Section 2",
      "title": "Preferences",
      "elements": [
        {
          "type": "radiogroup",
          "name": "owncar",
          "title": "Do you own a car?",
          "isRequired": true,
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "dropdown",
          "name": "carbrand",
          "visibleIf": "{owncar} = 'Yes'",
          "title": "What car brand do you own?",
          "isRequired": true,
          "choices": [
            "Toyota",
            "BMW",
            "Honda"
          ]
        },
        {
          "type": "text",
          "name": "kmPerMonth",
          "visibleIf": "{owncar} = 'Yes'",
          "title": "How many kilometers do you drive per month?",
          "isRequired": true,
          "inputType": "number"
        },
        {
          "type": "radiogroup",
          "name": "travelFrequent",
          "title": "Do you travel frequently for work?",
          "isRequired": true,
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "preferredTransportation",
          "visibleIf": "{travelFrequent} = 'Yes'",
          "title": "Which mode of transportation do you prefer?",
          "choices": [
            "Flight",
            "Train",
            "Car",
            "Bus"
          ]
        }
      ]
    },
    {
      "name": "Section 3",
      "title": "Feedback",
      "elements": [
        {
          "type": "matrix",
          "name": "feedbackrating",
          "title": "Rate the following statements on a scale of 1-5.",
          "isRequired": true,
          "columns": [
            "1",
            "2",
            "3",
            "4",
            "5"
          ],
          "rows": [
            {
              "value": "Understandability",
              "text": "The survey was easy to understand."
            },
            {
              "value": "FormInterface",
              "text": "The form interface was intuitive."
            },
            {
              "value": "QuestionRelevance",
              "text": "The questions were relevant."
            }
          ]
        },
        {
          "type": "file",
          "name": "fileUpload",
          "title": "Upload a photo of your car or a travel ticket.",
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "additionalfeedback",
          "title": "Do you have any additional feedback?"
        }
      ]
    }
  ],
  "pagePrevText": "Back Page",
  "pageNextText": "Next Page",
  "completeText": "Submit"
}