<html>
    <body>
        <h1>Welcome to mochaApiTesting repository.</h1>
        <h4>This project aims to come up with a testing package in Node.js using Mocha.js in order to aid backend developers to help build API unit test cases effectively and efficiently.
            We extensively make use of express, chai and Cassandra-driver libraries alongside Node.js</h4><br>

<h3>How to setup the project?</h3>
1. Make sure Python and JDK8 are installed to be able to run Cassandra DB.<br><br>
2. Install cassandra instance using PIP.<br><br>
3. Open the Cassandra Query Language (CQL) terminal and run "cassandra-f" to start the instance and connect to the cluster.<br><br>
4. Create a KeySpace and a table with desired attributes.<br><br>
5. Run "npm install" in the projectMocha directory.<br><br>
6. Open a termninal to run the Node instance to open localhost.<br><br>
7. The localhost basically opens up our automation tool. They describe the testcases executed, its passes and failures along with Code coverage report and error messages if any.<br><br>
8. Open localhost in the browser and click on Execute Command button to start execution of our testcases by one click mechanism.<br><br>
	
<h3>Lets have a look at some of the important files and their functions:</h3>
<b>1. app/crudController.cjs</b><br>
&emsp;This file contains the important functions that interact with the database using CRUD opeartions. They also have the queries needed to execute into the DB.<br><br>
<b>2. app/server.cjs</b><br>
&emsp;This file basically exposes the functions defined in crudController as APIs which can be accessed or invoked using basic HTTP Methods (POST, GET).<br>
&emsp;They interact with the crudController file based on the route, finds the specific method and obtains a result which is then passed for assertion to our testcases.<br><br>
<b>3. test/apiTest.js</b><br>
&emsp;This file contains unit testcases designed in Mocha. It has separate testcases that directly invokes the crud functions and brings out a result for assertion using expect blocks.<br><br>
<b>4. test/server.js</b><br>
&emsp;This file contains unit testcases designed in Mocha to specifically TEST by invoking the APIs using URL through HTTP methods defined in app/server.cjs file. They obtain a result which is then asserted by expect block with predefined results.<br><br>
<b>5. index.html AND test.html</b><br>
&emsp;These html files act as a UI for the automation tool to execute testcases on one-click. They show Pass/Fail testcase reports along with Code Coverage reports.<br><br>
<b>7. package.json</b><br>
&emsp;This file contains all predefined libraries that are required by node to execute this project seamlessly.<br><br>
   </body>
</html>
