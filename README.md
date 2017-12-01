# No-Bull Frontend Description 
A serverless web application build on aws infrastructure designed to evaluate open question tests created by teachers. 
There are 2 types of users in our application: 
* **Teacher** - Able to register students, create groups, create tests, apply tests to certain groups and review the marks the nb platform assigns to the answers of applied tests.
* **Student/Anonymous** - After recieving a code to his emaill he can enter such code in the website to answer a test created by a teacher.


This project utilizes [yo angular generator](https://github.com/yeoman/generator-angular), [grunt](https://gruntjs.com/) and [bower](https://bower.io/) 

## Installation and Setup
These are all the dependencies used to develop this project:  
- NodeJS >=8.4.0  
- npm 5.4.2  

Instructions after cloning the project:   
- Run:    
    $ npm install  
    $ bower install  

And you're all set!  

## Build & development  
Run `grunt build` to build the application.  
Run `grunt serve` for preview.  

## Decisions
To develop this application we chose to do a serverless SPA. As such we opted to use AngularJS that, when paired with yeoman and grunt, significantly cuts down the development time and increases productivity, part of this is also because of how well-spread the technology is and the enormous community it has. 
 
## How does it work?
The application is divided in two parts, teacher and student:
 - **Teacher**: a teacher is able to sign in and manage different groups of students, create tests, apply those tests to said groups and review his students' answers. When a teacher creates a test and applies it to a group, a notification is sent to the students' email containing a code and a link, where they are able to submit that code and start answering their test.
 - **Student**: a student that has received a test code can submit said code to access the corresponding test. The student can only submit his code to answer the test, and once finished he can submit it and get his results.

## Architecture
Our application is based on a miscroservices architecture, this way scalability is easier and working in a modular way helps to reduce time in building, debugging, modifying and working in parallel without causing issues. The microservices used are part of Amazon Web Services.

The application's front-end was made using Angular and NodeJS, and it was hosted in a S3 bucket. While navigating through the application, in teacher's view or student's view, the front-end can interact with the back-end through the use of AWS API Gateway. This service calls Lambda functions to interact with the rest of the back-end of the application. To link these lambdas with API Gateway, we utilize Chalice, which is a microframework created by Amazon to connect lambdas to APIs by utilizing Python. Lambdas in this application are use to call other AWS services to be able to work in modules. 

Information used by this application is stored in DynamoDB, where we store teacher information, students, groups and a table to link a student code with a test. This service was chose because it is read/write intensive and there is no need of using queries to get data. Dynamo is also used to store information needed for our Natural Lenguage Processing (NLP) algorithm, this algorithm analizes different concepts with their meaning and also what they don't mean. With comparing the definitions with concepts we can get a general idea of what the answers is talking about and grade if the student's answer is really what we ask for. When a student finishes answering and submits, this algorithm is called to review the answers and grade them accordingly.

Another service used is SNS. When a teacher creates an exam and adds a group to it, a notification is send to the linked students' email with their corresponding code and a link to access the page where they can submit this code.