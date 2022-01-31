# TEAM-PROFILE-GENERATOR

## Click [here](https://tinyurl.com/yddauu6x) to watch my video recording

## Description

Our task was to build to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so also we needed to write a unit test for every part of our code and ensure that it passes each test.

---

## Requirements

All that you need to run this application is Node.js, and some global packages installed within the local environment.

## Getting started

    $ git clone https://github.com/tigerbath/team-profiles-generator
    $ cd team-profiles-generator
    $ npm i

## What did we do?

- Install npm i
- Install npm i jest:watch
- Install npm i jest
- Install npm i inquirer
- Developed the team profile generator by creating the employee, engineer, intern and manager classes and after tested all the classes with jest test
- npm run test:watch for the first round of tests
- all tests has been successful
- Using inquirer we have generated/prompt the questions
- Created the init function in order to start the app and render the questions and answers
- Used w while loop in order to destructed the object that each team member needed to rendered
- The html file which is rendering the team profile card can be seen

  ![screenshot1](./src/images/cards.png)

## Running the project

    $ npm start

## Testing

    $ npm run test:watch
    $ npm run test

![screenshot1](./src/images/employee.test.jpg)
![screenshot2](./src/images/engineer.test.jpg)
![screenshot3](./src/images/intern.test.jpg)
![screenshot4](./src/images/manager.test.jpg)
![screenshot5](./src/images/test1.jpg)
