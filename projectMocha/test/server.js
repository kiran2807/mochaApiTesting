import { expect } from "chai";
import request from "request";

describe("API Crud operations SERVER API testing", function() {
    describe("Customer Profile Creation using CRUD Operations", function() {

        //INSERT OPERATION API TESTING
        it("Check for status 200 and successful INSERTION message", function(done) {
            var url = "http://localhost:3000/addOperation";
            var body = {
                id : '1',
                firstName : 'Vyanktesh',
                lastName : 'Chinmay'
            };
            request({url: url, body : body, method: "POST", json: true}, 
            (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                expect(response.body.message).to.equal("User created successfully");
                done();
            });
        });

        //GET WITH ID OPERATION API TESTING
        it("Check for status 200 and successful GET message", function(done) {
            const id = '1';
            var url = "http://localhost:3000/readOperationWithID/"+id;
            request({url: url, method: "GET", json: true}, 
            (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                expect(response.body.message).to.equal("Vyanktesh");
                done();
            });
        });

        //GET WITH ID OPERATION API TESTING
        it("Check for status 200 and successful Test Read Operation with ID", function(done) {
            const id = '1';
            var url = "http://localhost:3000/tryreadOperationWithID/"+id;
            request({url: url, method: "GET", json: true}, 
            (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                // expect(response.body.message).to.equal("Vyanktesh");
                done();
            });
        });
        
    });
});