Welcome to mochaApiTesting repository.

This project aims to come up with a testing package in Node.js using Mocha.js in order to aid backend developers to help build API unit test cases effectively and efficiently.
We extensively make use of express, chai and Cassandra-driver libraries alongside Node.js

How to setup the project? 
1. Make sure Python and JDK8 are installed to be able to run Cassandra DB.
2. Install cassandra instance using PIP.
3. Open the Cassandra Query Language (CQL) terminal and run "cassandra-f" to start the instance and connect to the cluster.
4. Create a KeySpace and a table with desired attributes.
5. Run "npm install" in the projectMocha directory.
6. Open a termninal to run the Node instance to open localhost.
7. The localhost basically opens up our automation tool. They describe the testcases executed, its passes and failures along with Code coverage report and error messages if any.
8. Open localhost in the browser and click on Execute Command button to start execution of our testcases by one click mechanism.
    
Lets have a look at some of the important files and their functions:
1. app/crudController.cjs
   This file contains the important functions that interact with the database using CRUD opeartions. They also have the queries needed to execute into the DB.
2. app/server.cjs
   This file basically exposes the functions defined in crudController as APIs which can be accessed or invoked using basic HTTP Methods (POST, GET).
   They interact with the crudController file based on the route, finds the specific method and obtains a result which is then passed for assertion to our testcases.
3. test/apiTest.js
   This file contains unit testcases designed in Mocha. It has separate testcases that directly invokes the crud functions and brings out a result for assertion using expect blocks.
4. test/server.js
   This file contains unit testcases designed in Mocha to specifically TEST by invoking the APIs using URL through HTTP methods defined in app/server.cjs file. They obtain a result which is then asserted by expect block with predefined results.
5. index.html AND test.html
   These html files act as a UI for the automation tool to execute testcases on one-click. They show Pass/Fail testcase reports along with Code Coverage reports.
7. package.json
   This file contains all predefined libraries that are required by node to execute this project seamlessly.
