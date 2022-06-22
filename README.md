# base-crud-server

Implementation of simple CRUD API using in-memory database underneath

To intall locally run <code>git clone https://github.com/WilhelmYakunin/base-crud-server</code>.
<code>git checkout dev</code>
Afterwords in the folder of the cloned project type <code>npm i</code> and after all intalations <code>npm run start:multi</code>
To see the test remarks please run

<h2> The task</h2>
https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/crud-api/assignment.md
19.06.2022/ deadline 19.06.2022
score 202 /202
Basic Scope
+10 The repository with the application contains a Readme.md file containing detailed instructions for installing, running and using the application
+10 GET /user implemented properly
+10 GET /user/${userId} implemented properly
+10 POST /user implemented properly
+10 PUT /user/{userId} implemented properly
+10 DELETE /user/${userId} implemented properly
+6 Users are stored in the form described in the technical requirements
+6 Value of port on which application is running is stored in .env file
Advanced Scope
+30 Task implemented on Typescript
+10 Processing of requests to non-existing endpoints implemented properly
+10 Errors on the server side that occur during the processing of a request should be handled and processed properly
+10 Development mode: npm script start:dev implemented properly
+10 Production mode: npm script start:prod implemented properly
Hacker Scope
+30 There are tests for API (not less than 3 scenarios)
+30 There is horizontal scaling for application with a load balancer

<h2>Fo testing </h2>

#using hand-based method

After <code>git clone</code> and install all depencies in the directory of the app <code>npm i</code>
Please install <a href="https://www.postman.com/">Postmann</a> and run the app through command <code>npm run start:dev</code> or <code>npm run start:multi</code>. After in CLI there will be a messages by the server ensuring of being started at the url addres http://localhost:4040

<p>The exercising command for your convinies may be:

Method GET:

<code>http://localhost:4040/api/users</code>
Initially it'll return just'[]'

Method POST:
<code>http://localhost:4040/api/users</code>
and the app is expeted you to choose the body section named as 'x-www-form-urlcode'. Also implementation wants you to use all the fields (username, age, hobbies). If not - the server will return an error with human readable descrition.

The others methods are testaable in the same way. But remember to put all path to users data which must have an ID of an user. In other case there will occur an error message showing the problem.

Also do not hesistate and feel free to contact me on discord: @Vitalii#9363. i'll answer as soon as posible. I's a pleasure for me to know all of you.

</p>

#jest test
There are also implemented the unit and integration test which are exucutable by typingin in the CLI <code>npm run test</code>
Please visit the **test** folder to see the description of that is being tested.

Whish you best
