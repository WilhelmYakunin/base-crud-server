# base-crud-server

Implementation of simple CRUD API using in-memory database underneath

To intall locally run <code>git clone https://github.com/WilhelmYakunin/base-crud-server</code>. 
Then <code>git checkout dev</code>
Afterwords in the folder of the cloned project type <code>npm i</code> and after all intalations <code>npm run start:dev</code> or <code>npm run start:multi</code>
To see the task remarks please visit dev branch commit

<h2>For testing </h2>

#using hand-based method

After <code>git clone</code> and install all depencies in the directory of the app <code>npm i</code>
Please install <a href="https://www.postman.com/">Postmann</a> and run the app through command <code>npm run start:dev</code> or <code>npm run start:multi</code>. After in CLI there will be a messages by the server ensuring of being started at the url addres http://localhost:4040

<p>The exercising command for your convinies may be:

Method GET:

<code>http://localhost:4040/api/users</code>
Initially it'll return just'[]'

Method POST:
<code>http://localhost:4040/api/users</code>
and the app is expeted you to choose the body section named as 'x-www-form-urlcode' (please don't cofuse it with others type of input). Also implementation wants you to use all the fields (username, age, hobbies). If not - the server will return an error with human readable descrition.

The others methods are testaable in the same way. But remember to put all path to users data which must have an ID of an user. In other case there will occur an error message showing the problem.

Also do not hesistate and feel free to contact me on discord: @Vitalii#9363. i'll answer as soon as posible. I's a pleasure for me to know all of you.

</p>

#jest test
There are also implemented the unit and integration test which are exucutable by typingin in the CLI <code>npm run test</code>
Please visit the **test** folder to see the description of that is being tested.

Whish you best

