# No-Bull Frontend Description 
A serverless web application build on aws infrastructure designed to evaluate tests  designed by teachers that contain open questions. 
There are 2 types of users in our application: 
*Teacher - Able to register students, create groups, create tests, apply tests to certain groups and review the marks the nb platform assigns to the answers of applied tests.
*Student/Anonymous - After recieving a code to his emaill he can enter such code in the website to answer a test created by a teacher.


This project utilizes [yo angular generator](https://github.com/yeoman/generator-angular),
[grunt](https://gruntjs.com/) and [bower](https://bower.io/) 

##installation and setup
These are all the dependencies used to develop this project:  
-NodeJS >=8.4.0  
-npm 5.4.2  

Instructions after cloning the project:   
-Run:    
    $ npm install  
    $ bower install  

And you're all set!  

## Build & development  
Run `grunt build` to build the application.  
Run `grunt serve` for preview.  

## Decisions
To develop this application we chose to do a serverless SPA. As such we opted to use AngularJS that, when paired with yeoman and grunt, significantly cuts down the development time and increases productivity, part of this is also because of how well-spread the technology is and the enormous community it has. 
 