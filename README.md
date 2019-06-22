# Knockri Full Stack (React) Coding Assessment Submission By Sagrika Aggarwal

## What does it do?

A simple React application, where users will be able to view a job candidate's video responses, comment on the responses & save the data. 

## Questions

* How did you decide which technologies to use as part of your solution?

    I used React.js and various other dependencies. React was the basic requirement for this task. I implemented the front-end by consuming API's provided using Axios and managing the state via Context API.

* Are there any improvements you could make to your submission?
    I could have made the UI more appealing.
    Added a show comment section for each video. 
   

* What would you do differently if you were allocated more time?
     I would have loved to implement Redux but due to lack of complete knowledge and time constraint, I chose to go with context Api instead.


* Implementation of Redux
    This being a small and simple application did not call for the use of Redux. Context Api and props passing has ben used where ever needed. 
    Component flow: App>Candidates>Application>Video>Comment

## How  the application works?

The user of this react application should be able to view the video response(s) of job candidates applying for a job at their company. The application should have the following workflow,

1. Choose candidate from a list.
2. Depending on the selection in the first step, if the selected candidate has an application, display the video response(s) of the candidate with the relevant question displayed in text. If the selected candidate does not have an application, display appropriate message.
3. For each video response of a candidate, provide an option to enter comments.
4. Provide a "Save" button that saves the comments to the api.json file.

## How to run the application

* Run the backend api.json via npm start
* Clone the project
* Run npm install
* Run application : npm start
* Applicants will appear on the left side nav bar, clicking on any candidate would display there video responses along with questions and   comments on the right 



## API Usage

API can be launched using npm start. You will need to run npm install once you starting working on the project to install dependencies.

| Endpoint                     | Result                                              |
|------------------------------|-----------------------------------------------------|
| /candidates                  | Lists all available candidates                      |
| /questions                   | Lists all available questions                       |
| /applications                | Lists all available applications                    |

More info about API usage can be found at the [json-server repo](https://github.com/typicode/json-server).

---

